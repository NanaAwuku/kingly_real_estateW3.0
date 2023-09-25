import React, { useState, useEffect } from "react";
import { useEthereum } from "../context/EthereumContext";
import RealEstateToken from "../contractsAbi/RealEstateToken.json";
import NewNav from "../components/NewNav";
import newPic from "../assets/img/tall2.jpg";
import { ethers } from "ethers";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



function CreatePropertyPage() {
  const { provider } = useEthereum();
  const [contract, setContract] = useState(null);
  const navigate = useNavigate();

  let contractAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

  const [propertyDetails, setPropertyDetails] = useState({
    name: "",
    location: "",
    totalShares: "",
    availableSupply: "",
    pricePerShare: "",
    imageURI: "",
  });

  // Initialize the contract instance when the provider is available
  useEffect(() => {
    if (provider) {
      const contract = new ethers.Contract(
        contractAddress,
        RealEstateToken,
        provider.getSigner()
      );
      setContract(contract);
    }
  }, [provider]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails({ ...propertyDetails, [name]: value });
  };

  const handleMintClick = async (e) => {
    e.preventDefault();
    try {
      if (!contract || !provider) {
        return;
      }
      const {
        name,
        location,
        totalShares,
        availableSupply,
        pricePerShare,
        imageURI,
      } = propertyDetails;

      // Call the contract's createProperty function
      const transaction = await contract.createProperty(
        name,
        location,
        totalShares,
        availableSupply,
        ethers.parseEther(pricePerShare),
        imageURI
      );

      // Wait for the transaction to be mined
      // await transaction.wait();

      // Reset property details form
      setPropertyDetails({
        name: "",
        location: "",
        totalShares: "",
        availableSupply: "",
        pricePerShare: "",
        imageURI: "",
      });

      // Handle success or provide user feedback
      toast.success('Property created and minted successfully!', {
        position: toast.POSITION.TOP_RIGHT, // You can customize the position
      });
      navigate('/viewproperty');
    } catch (error) {
      console.error("Error creating property:", error);
      toast.error('An error occurred while creating the property.', {
        position: toast.POSITION.TOP_RIGHT, // You can customize the position
      });
    }
  };

  return (
    <div className="flex items-center justify-center">
      <NewNav />
        <div className=" mt-20 mx-auto py-6">
          <h1 className="text-3xl font-semibold text-center mb-6">
            Create a New Property
          </h1>
          <div className=" container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
            <img src={newPic} className="h-[700px]" alt="" />

            <div className="bg-white rounded-lg shadow-md p-4">
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Property Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={propertyDetails.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter property name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={propertyDetails.location}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter location"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Total Shares
                  </label>
                  <input
                    type="number"
                    name="totalShares"
                    value={propertyDetails.totalShares}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter total shares"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Available Supply
                  </label>
                  <input
                    type="number"
                    name="availableSupply"
                    value={propertyDetails.availableSupply}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter Available Supply"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Price Per Share (ETH)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    name="pricePerShare"
                    value={propertyDetails.pricePerShare}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter price per share"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    Image URI
                  </label>
                  <input
                    type="text"
                    name="imageURI"
                    value={propertyDetails.imageURI}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Enter image URI"
                  />
                </div>
                <button
                  onClick={handleMintClick}
                  className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
                >
                  Create Property
                </button>
              </form>
            </div>
            
          </div>
        </div>
    </div>
  );
}

export default CreatePropertyPage;
