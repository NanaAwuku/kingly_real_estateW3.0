// PropertyListPage.jsx

import React, { useState, useEffect } from "react";
import { useEthereum } from "../context/EthereumContext";
import RealEstateToken from "../contractsAbi/RealEstateToken.json";
import NewNav from "../components/NewNav";
import { ethers } from "ethers";
import { Link } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";

function PropertyListPage() {
  const { provider } = useEthereum();
  const [contract, setContract] = useState(null);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  let contractAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

  // Initialize the contract instance when the provider is available
  useEffect(() => {
    if (provider) {
      const contract = new ethers.Contract(
        contractAddress,
        RealEstateToken,
        provider
      );
      setContract(contract);
    }
  }, [provider]);

  // Fetch properties when the contract is loaded
  useEffect(() => {
    if (contract) {
      fetchProperties();
    }
  }, [contract]);

  const fetchProperties = async () => {
    try {
      const propertyCount = await contract.getPropertyCount(); // Use corrected function name
      const propertyList = [];

      for (let i = 1; i <= propertyCount; i++) {
        const property = await contract.properties(i);
        propertyList.push(property);
      }

      setProperties(propertyList);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  if (loading) {
    return <div className="flex flex-col items-center justify-center w-full h-screen font-bold text-2xl ">
      <Spinner className="w-16 h-16 text-violet-800" />
    </div>;
  }

  return (
    <div>
      <NewNav />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-4">Properties</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {properties.map((property, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md transition duration-300 hover:shadow-lg cursor-pointer"
            >
              <h2 className="text-xl font-semibold">{property.name}</h2>
              <p className="text-gray-500">{property.location}</p>
              <p className="mt-2">Total Supply: {property.totalSupply} shares</p>
              <p className="mt-2">Available Supply: {property.availableSupply} shares</p>
              <p>Price Per Share: {property.pricePerShare} ETH</p>
              <Link
                to={`/property/${property.tokenId}`} // Link to the property details page
                className="text-blue-500 hover:underline mt-2 block"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PropertyListPage;
