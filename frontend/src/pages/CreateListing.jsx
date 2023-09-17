import React, { useState } from 'react';

const PropertyCreationPage = () => {
  const [propertyDetails, setPropertyDetails] = useState({
    title: '',
    location: '',
    description: '',
    imageUrl: '',
    isFeatured: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails({
      ...propertyDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to create and add the property to the marketplace and featured properties if needed
    console.log('Property created:', propertyDetails);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Create a New Property Listing</h2>
      <form onSubmit={handleSubmit}>
        {/* Property details input fields */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
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
        {/* Add more input fields for location, description, image URL, etc. */}

        {/* Featured property checkbox */}
        <div className="mb-4">
          <input
            type="checkbox"
            id="isFeatured"
            name="isFeatured"
            checked={propertyDetails.isFeatured}
            onChange={(e) => setPropertyDetails({ ...propertyDetails, isFeatured: e.target.checked })}
            className="mr-2"
          />
          <label htmlFor="isFeatured" className="text-sm font-medium text-gray-700">
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
  );
};

export default PropertyCreationPage;
