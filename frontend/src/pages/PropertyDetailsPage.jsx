// PropertyDetailsPage.jsx

import React, { useState, useEffect } from "react";
import { useEthereum } from "../context/EthereumContext";
import RealEstateToken from "../contractsAbi/RealEstateToken.json";
import NewNav from "../components/NewNav";
import { useParams } from "react-router-dom";
import { ethers } from "ethers";

function PropertyDetailsPage() {
  const { provider } = useEthereum();
  const [contract, setContract] = useState(null);
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [buySharesAmount, setBuySharesAmount] = useState(0);

  const { tokenId } = useParams();

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

  // Fetch property details when the contract is loaded
  useEffect(() => {
    if (contract && tokenId) {
      fetchPropertyDetails();
    }
  }, [contract, tokenId]);

  const fetchPropertyDetails = async () => {
    try {
      const propertyDetails = await contract.properties(tokenId);
      setProperty(propertyDetails);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching property details:", error);
    }
  };

  const handleBuyShares = async () => {
    try {
      if (!contract || !property || buySharesAmount <= 0) {
        return;
      }

      // Call the contract's purchaseShares function
      const transaction = await contract.purchaseShares(
        tokenId,
        buySharesAmount,
        {
          value: property.pricePerShare * buySharesAmount,
        }
      );

      // Wait for the transaction to be mined
      await transaction.wait();

      // Clear the form
      setBuySharesAmount(0);

      // Handle success or provide user feedback
      alert("Shares purchased successfully!");
    } catch (error) {
      console.error("Error purchasing shares:", error);
      alert("An error occurred while purchasing shares.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NewNav />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-semibold mb-4">Property Details</h1>
        <div className=" container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
          <div className="bg-white p-4 rounded-lg shadow-md">
          <img
              src={property.imgUrl}
              alt={property.name}
              className="mt-4 rounded-lg"
            />
            <h2 className="text-xl font-semibold mb-2">{property.name}</h2>
            <p>Location: {property.location}</p>
            <p>Total Supply: {property.totalSupply} shares</p>
            <p>Price Per Share: {property.pricePerShare} ETH</p>
            {/* Display property image */}
            
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <form>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-2">Buy Shares</h3>
                <input
                  type="number"
                  value={buySharesAmount}
                  onChange={(e) => setBuySharesAmount(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter the number of shares to buy"
                />
                <button
                  onClick={handleBuyShares}
                  className="bg-blue-500 text-white py-2 px-4 rounded-full mt-2 hover:bg-blue-600"
                >
                  Buy
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetailsPage;
