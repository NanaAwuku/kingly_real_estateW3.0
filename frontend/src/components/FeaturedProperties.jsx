import React, { useState } from 'react';

const FeaturedPropertyCard = ({ imageUrl, title, location, learnMoreLink }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img src={imageUrl} alt={title} className="w-full mb-4 rounded-lg" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{location}</p>
      <button onClick={openModal} className="text-blue-500 hover:underline cursor-pointer">
        Learn More
      </button>

      {/* Property Details Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 max-w-md rounded-lg shadow-lg">
            {/* Modal content */}
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <p className="text-gray-600 mb-4">{location}</p>
            
            {/* Property details */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Property Details:</h3>
              {/* Add more property details here */}
              <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              {/* Add more details as needed */}
            </div>
            
            {/* Buy Property Form */}
            <form>
              {/* Add form fields for buying the property */}
              <div className="mb-4">
                <label htmlFor="paymentAmount" className="block text-sm font-medium text-gray-700">
                  Payment Amount (ETH)
                </label>
                <input
                  type="number"
                  id="paymentAmount"
                  name="paymentAmount"
                  className="mt-1 p-2 w-full border rounded-md"
                  // Add onChange and value props to manage the form input
                />
              </div>

              {/* Add more form fields as needed */}

              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                >
                  Buy Property
                </button>
              </div>
            </form>
            
            <button onClick={closeModal} className="text-blue-500 hover:underline cursor-pointer mt-4">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedPropertyCard;
