import React, { useState } from "react";
import NewNav from "../components/NewNav";

import newPic from '../assets/img/tall2.jpg'

function CreatePropertyPage({ onMint }) {
  const [propertyDetails, setPropertyDetails] = useState({
    name: "",
    location: "",
    totalShares: "",
    pricePerShare: "",
    imageURI: "", // Add an input field for image URI
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails({ ...propertyDetails, [name]: value });
  };

  const handleMintClick = () => {
    // Call the onMint function to create and mint the property
    onMint(propertyDetails);
  };

  return (
    <div className="">
      <NewNav />
      <div className="flex items-center gap-16">
        <div className=" ">
          <img src={newPic} className="w-[400px]" alt="" />
        </div>
        <div className="container mt-20 mx-auto py-6">
          <h1 className="text-3xl font-semibold mb-6">Create a New Property</h1>
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
                Create and Mint Property
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePropertyPage;
