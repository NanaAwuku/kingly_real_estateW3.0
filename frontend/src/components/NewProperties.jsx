import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { useParams } from "react-router-dom"; // Import useParams
import propertyImage1 from "../assets/img/fet1.jpg";
import propertyImage2 from "../assets/img/fet2.jpg";
import propertyImage3 from "../assets/img/fet3.jpg";
import propertyImage4 from "../assets/img/fet4.jpg";
import propertyImage5 from "../assets/img/fet5.jpg";
import propertyImage6 from "../assets/img/fet1.jpg";
import NewNav from "./NewNav";

const NewPropertyPage = () => {
  // Placeholder property data
  const properties = [
    {
      id: 1,
      name: "Luxury Villa",
      location: "Miami, FL",
      price: "2,500 ETH",
      image: propertyImage1,
    },
    {
      id: 2,
      name: "Beachfront Condo",
      location: "Malibu, CA",
      price: "3,200 ETH",
      image: propertyImage2,
    },
    {
      id: 3,
      name: "Mountain Retreat",
      location: "Aspen, CO",
      price: "4,800 ETH",
      image: propertyImage3,
    },
    {
      id: 4,
      name: "Urban Penthouse",
      location: "New York, NY",
      price: "5,300 ETH",
      image: propertyImage4,
    },
    {
      id: 5,
      name: "Lakefront Cottage",
      location: "Lake Tahoe, CA",
      price: "2,900 ETH",
      image: propertyImage5,
    },
    {
      id: 6,
      name: "Desert Oasis",
      location: "Scottsdale, AZ",
      price: "3,600 ETH",
      image: propertyImage6,
    },
    // Add more property objects as needed
  ];

  return (
    <>
      <NewNav />
      <div className="container mx-auto mt-24">
        <h1 className="text-3xl font-semibold mb-6">New Property Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-lg shadow-md p-4"
            >
              {/* Use Link to navigate to property details */}
              <Link to={`/property/${property.id}`}>
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-40 object-cover mb-2 rounded-lg"
                />
                <h2 className="text-xl font-semibold mb-2">
                  {property.name}
                </h2>
                <p className="text-gray-600 mb-2">{property.location}</p>
                <p className="text-green-500 font-semibold">
                  {property.price}
                </p>
              </Link>
              {/* Add more property details as needed */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewPropertyPage;
