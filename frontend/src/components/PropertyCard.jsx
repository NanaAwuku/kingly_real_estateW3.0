import React from "react";

const PropertyCard = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <img
        src={property.imgUrl}
        alt={property.name}
        className="w-full h-auto rounded-md mb-2"
      />
      <h3 className="text-xl font-semibold mb-2">{property.name}</h3>
      <p className="text-gray-700 mb-2">{property.location}</p>
      <p className="text-gray-700 mb-2">
        Total Shares: {property.totalSupply}
      </p>
      <p className="text-gray-700 mb-2">
        Price Per Share (ETH): {property.pricePerShare / 1e18}
      </p>
      <p className="text-gray-700 mb-2">
        Available Shares: {property.availableSupply}
      </p>
    </div>
  );
};

export default PropertyCard;
