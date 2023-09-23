import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ListingPage({ contract }) {
  const [listings, setListings] = useState([]);

  // Fetch property listings from the smart contract
  useEffect(() => {
    async function fetchListings() {
      const totalListings = await contract.methods.getTotalListings().call();
      const listings = [];

      for (let i = 1; i <= totalListings; i++) {
        const listing = await contract.methods.getPropertyListing(i).call();
        listings.push(listing);
      }

      setListings(listings);
    }

    fetchListings();
  }, [contract]);

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-semibold mb-6">List of Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <div key={listing.listingId} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-2xl font-semibold">{listing.name}</h2>
            <p>Location: {listing.location}</p>
            <p>Total Shares: {listing.totalShares}</p>
            <p>Price Per Share (ETH): {listing.pricePerShare}</p>
            <p>Shares Available: {listing.sharesAvailable}</p>
            <Link to={`/property/${listing.listingId}`} className="text-blue-500 hover:underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListingPage;
