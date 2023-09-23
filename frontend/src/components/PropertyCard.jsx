// PropertyCard.js

import React, { useState } from 'react';

function PropertyCard({ listing, onPurchase }) {
  const [sharesToBuy, setSharesToBuy] = useState(0);

  const handlePurchaseClick = () => {
    // Call the 'onPurchase' function to initiate the purchase
    onPurchase(listing.id);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold">{listing.name}</h2>
      <p className="text-gray-500 mb-2">{listing.location}</p>
      <div className="flex justify-between items-center">
        <p className="text-lg">${listing.pricePerShare} per share</p>
        <p className="text-gray-500">
          {listing.sharesAvailable} / {listing.totalShares} shares available
        </p>
      </div>
      <div className="mt-4 flex items-center space-x-4">
        <input
          type="number"
          min="1"
          max={listing.sharesAvailable}
          value={sharesToBuy}
          onChange={(e) => setSharesToBuy(e.target.value)}
          className="w-16 px-2 py-1 border border-gray-300 rounded-md"
        />
        <button
          onClick={handlePurchaseClick}
          className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
        >
          Purchase
        </button>
      </div>
    </div>
  );
}

export default PropertyCard;
