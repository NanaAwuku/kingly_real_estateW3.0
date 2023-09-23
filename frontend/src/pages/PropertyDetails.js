import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PropertyDetailsPage({ web3, contract }) {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  // Fetch property details for the specified 'id'
  // useEffect(() => {
  //   async function fetchPropertyDetails() {
  //     const listing = await contract.methods.getPropertyListing(id).call();
  //     setProperty(listing);
  //   }

  //   fetchPropertyDetails();
  // }, [contract, id]);

  // const buyShares = async (sharesToBuy, pricePerShare) => {
  //   try {
  //     await contract.methods.buy(id, sharesToBuy).send({
  //       from: web3.eth.accounts[0],
  //       value: web3.utils.toWei((sharesToBuy * pricePerShare).toString(), 'ether'),
  //     });

  //     // Refresh property details after a successful purchase
  //     fetchPropertyDetails();
  //   } catch (error) {
  //     console.error('Error buying shares:', error);
  //   }
  // };

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-semibold mb-6">Property Details</h1>
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-2xl font-semibold">{property?.name}</h2>
        <p>Location: {property?.location}</p>
        <p>Price Per Share (ETH): {web3.utils.fromWei(property?.pricePerShare, 'ether')}</p>
        <p>Shares Available: {property?.sharesAvailable}</p>
        <button
          // onClick={() => buyShares(1, property?.pricePerShare)}
          className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 mt-2"
        >
          Buy Shares
        </button>
      </div>
    </div>
  );
}

export default PropertyDetailsPage;
