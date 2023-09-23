import React from 'react';

import House1 from "../assets/img/fet1.jpg";
import House2 from "../assets/img/fet2.jpg";
import House3 from "../assets/img/fet3.jpg";

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      name: 'Luxury Villa',
      location: 'Beverly Hills, CA',
      pricePerShare: '2.5 ETH',
      imageSrc: House1, // Replace with actual image source
    },
    {
      id: 2,
      name: 'Beachfront Condo',
      location: 'Miami Beach, FL',
      pricePerShare: '1.8 ETH',
      imageSrc: House2, // Replace with actual image source
    },
    {
      id: 3,
      name: 'Mountain Retreat',
      location: 'Aspen, CO',
      pricePerShare: '3.0 ETH',
      imageSrc: House3, // Replace with actual image source
    },
  ];

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-semibold mb-6">Featured Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded-lg shadow-md p-4">
            <img
              src={property.imageSrc}
              alt={property.name}
              className="w-full h-40 object-cover mb-4"
            />
            <h2 className="text-2xl font-semibold">{property.name}</h2>
            <p>Location: {property.location}</p>
            <p>Price Per Share: {property.pricePerShare}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
