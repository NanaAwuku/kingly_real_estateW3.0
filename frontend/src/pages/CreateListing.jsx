import React, { useState } from "react";
import { NFTStorage, File } from "nft.storage";
import HeroPic from "../assets/img/real1.jpg";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGNjOTRhNjI0MDkxNjVjOGRlYjI2OGRFOTg5REJjMDgyNjBGYTE5OTQiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY5NTE1MDMyMDgwNiwibmFtZSI6Im5hbmFhd3VrdSJ9.DCz4Yo5ECpxOFzwiPcKVubrI7ob3PsLHjzvnrgOm-Dg";
const client = new NFTStorage({ token: API_KEY });

const PropertyCreationPage = () => {
  const [propertyDetails, setPropertyDetails] = useState({
    title: "",
    location: "",
    description: "",
    imageUrl: "",
    isFeatured: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails({
      ...propertyDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Store the metadata on IPFS via NFT.storage
    const metadata = await client.store({
      name: propertyDetails.title,
      description: propertyDetails.description,
      image: new File([propertyDetails.imageUrl], "image.jpg", {
        type: "image/jpg",
      }),
    });

    // Call your contract's mint function here with metadata.url as the tokenURI
    setPropertyDetails("");
    console.log("Property created:", propertyDetails);
    console.log("NFT data stored!");
    console.log("Metadata URI: ", metadata.url);
  };

  return (
    <div className="container mx-auto mt-8 flex flex-col lg:flex-row">
      <div className="lg:w-1/2">
        <img
          src={HeroPic}
          alt="Real Estate"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="lg:w-1/2 px-8 mt-8 lg:mt-0">
        <h2 className="text-2xl font-bold mb-4">
          Create a New Property Listing
        </h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          {/* Property details input fields */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={propertyDetails.title}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          {/* Location input field */}
          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={propertyDetails.location}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          {/* Description input field */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={propertyDetails.description}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          {/* Image URL input field */}
          <div className="mb-4">
            <label
              htmlFor="imageUrl"
              className="block text-sm font-medium text-gray-700"
            >
              Image URL
            </label>
            <input
              type="text"
              id="imageUrl"
              name="imageUrl"
              value={propertyDetails.imageUrl}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          {/* Featured property checkbox */}
          <div className="mb-4">
            <input
              type="checkbox"
              id="isFeatured"
              name="isFeatured"
              checked={propertyDetails.isFeatured}
              onChange={(e) =>
                setPropertyDetails({
                  ...propertyDetails,
                  isFeatured: e.target.checked,
                })
              }
              className="mr-2"
            />
            <label
              htmlFor="isFeatured"
              className="text-sm font-medium text-gray-700"
            >
              Featured Property
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Create Property
          </button>
        </form>
      </div>
    </div>
  );
};

export default PropertyCreationPage;
