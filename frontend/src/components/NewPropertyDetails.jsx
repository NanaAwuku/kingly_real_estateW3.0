import React from "react";
import { useParams } from "react-router-dom";
import propertyImage1 from "../assets/img/fet1.jpg";
import propertyImage2 from "../assets/img/fet2.jpg";
import propertyImage3 from "../assets/img/fet3.jpg";
import propertyImage4 from "../assets/img/fet4.jpg";
import propertyImage5 from "../assets/img/fet5.jpg";
import propertyImage6 from "../assets/img/fet1.jpg";
import NewNav from "./NewNav";

const NewPropertyDetailsPage = () => {
  // Placeholder property data
  const properties = [
    {
      id: 1,
      name: "Luxury Villa",
      location: "Miami, FL",
      price: "2,500 ETH",
      image: propertyImage1,
      description: "A luxurious villa in the heart of Miami.",
    },
    {
      id: 2,
      name: "Beachfront Condo",
      location: "Malibu, CA",
      price: "3,200 ETH",
      image: propertyImage2,
      description: "A beautiful beachfront condo in Malibu.",
    },
    {
      id: 3,
      name: "Mountain Retreat",
      location: "Aspen, CO",
      price: "4,800 ETH",
      image: propertyImage3,
      description: "A cozy mountain retreat in Aspen.",
    },
    {
      id: 4,
      name: "Urban Penthouse",
      location: "New York, NY",
      price: "5,300 ETH",
      image: propertyImage4,
      description: "An elegant urban penthouse in New York City.",
    },
    {
      id: 5,
      name: "Lakefront Cottage",
      location: "Lake Tahoe, CA",
      price: "2,900 ETH",
      image: propertyImage5,
      description: "A charming lakefront cottage in Lake Tahoe.",
    },
    {
      id: 6,
      name: "Desert Oasis",
      location: "Scottsdale, AZ",
      price: "3,600 ETH",
      image: propertyImage6,
      description: "A luxurious desert oasis in Scottsdale.",
    },
    // Add more property objects as needed
  ];

  // Use useParams to get the property ID from the URL
  const { propertyId } = useParams();
  const selectedProperty = properties.find(
    (property) => property.id === Number(propertyId)
  );

  if (!selectedProperty) {
    return <div>Property not found</div>;
  }

  return (
    <>
      <NewNav />
      <div className="container mx-auto mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-md p-4">
            <img
              src={selectedProperty.image}
              alt={selectedProperty.name}
              className="w-full h-64 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-semibold mb-2">
              {selectedProperty.name}
            </h2>
            <p className="text-gray-600 mb-2">{selectedProperty.location}</p>
            <p className="text-green-500 font-semibold">
              {selectedProperty.price}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p>{selectedProperty.description}</p>
            {/* Add more property details as needed */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPropertyDetailsPage;
