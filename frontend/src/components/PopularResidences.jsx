import React from "react";

import House1 from "../assets/img/fet1.jpg";
import House2 from "../assets/img/fet2.jpg";
import House3 from "../assets/img/fet3.jpg";
import { Button } from "@material-tailwind/react";

const PopularResidence = () => {
  const properties = [
    {
      id: 1,
      name: "Luxury Villa",
      location: "Beverly Hills, CA",
      pricePerShare: "2.5 ETH",
      imageSrc: House1, // Replace with actual image source
    },
    {
      id: 2,
      name: "Beachfront Condo",
      location: "Miami Beach, FL",
      pricePerShare: "1.8 ETH",
      imageSrc: House2, // Replace with actual image source
    },
    {
      id: 3,
      name: "Mountain Retreat",
      location: "Aspen, CO",
      pricePerShare: "3.0 ETH",
      imageSrc: House3, // Replace with actual image source
    },
     
  ];
  return (
    <section className="bg-white h-full w-full flex flex-col justify-center pb-20 items-center">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center gap-14 mt-20 items-center">
          <h2 className="text-6xl text-center px-28 text-blue-950 font-bold">
            Invest in fractions of rental properties across Africa
          </h2>
          <p className="text-2xl text-center px-[300px] mb-14 text-gray-800 font-semibold">
            All without leaving your living room. No experience, connections, or
            down payments required
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-md p-4"
            >
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

        <div className="flex flex-col items-center justify-center ">
          <Button className="focus:outline-none bg-blue-950 text-white w-[200px] mt-10 rounded-full">
            View Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularResidence;
