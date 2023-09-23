import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MarketplacePage({ web3, contract }) {
  const [listings, setListings] = useState([]);

  // Fetch property listings from the smart contract
  // useEffect(() => {
  //   async function fetchListings() {
  //     const totalListings = await contract.methods.getTotalListings().call();
  //     const listings = [];

  //     for (let i = 1; i <= totalListings; i++) {
  //       const listing = await contract.methods.getPropertyListing(i).call();
  //       listings.push(listing);
  //     }

  //     setListings(listings);
  //   }

  //   fetchListings();
  // }, [contract]);

  // Buy shares of a property
  // const buyShares = async (propertyId, sharesToBuy, pricePerShare) => {
  //   try {
  //     await contract.methods.buy(propertyId, sharesToBuy).send({
  //       from: web3.eth.accounts[0],
  //       value: web3.utils.toWei((sharesToBuy * pricePerShare).toString(), 'ether'),
  //     });

  //     // Refresh property listings after a successful purchase
  //     fetchListings();
  //   } catch (error) {
  //     console.error('Error buying shares:', error);
  //   }
  // };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-semibold mb-6">Real Estate Marketplace</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <div key={listing.listingId} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-2xl font-semibold">{listing.name}</h2>
            <p>Location: {listing.location}</p>
            <p>Price per Share: {web3.utils.fromWei(listing.pricePerShare, 'ether')} ETH</p>
            <p>Shares Available: {listing.sharesAvailable}</p>
            <button
              // onClick={() => buyShares(listing.listingId, 1, listing.pricePerShare)}
              className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 mt-2"
            >
              Buy
            </button>
            <Link to={`/property/${listing.listingId}`} className="text-blue-500 hover:underline mt-2 block">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketplacePage;
