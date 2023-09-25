// Import necessary modules from Hardhat and ethers.js
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("RealEstateMarketplace", function () {
  let owner;
  let user1;
  let user2;
  let marketplace;
  let realEstateToken;
  const baseTokenURI = "https://ipfs.io/ipfs/bafyreib2rlfu6rvqgpkeyris5bsbtabi4duq6jyyuo7c6opwhjmxkbpnjm/{id}.json";

  beforeEach(async function () {
    // Deploy RealEstateToken and RealEstateMarketplace contracts
    [owner, user1, user2] = await ethers.getSigners();

    const RealEstateToken = await ethers.getContractFactory("RealEstateToken");
    realEstateToken = await RealEstateToken.deploy(baseTokenURI);
    await realEstateToken.waitForDeployment();

    const RealEstateMarketplace = await ethers.getContractFactory("RealEstateMarketplace");
    marketplace = await RealEstateMarketplace.deploy(realEstateToken.address, ethers.parseEther("0.01")); // Listing fee is 0.01 Ether
    await marketplace.waitForDeployment();

    // Mint some ERC-1155 tokens for user1
    await realEstateToken.connect(user1).createProperty("Property 1", "Location 1", 100, 100, 1000);
  });

  it("Should allow listing a property", async function () {
    // User1 lists a property
    const tokenId = 1;
    const pricePerShare = 1000;
    const totalShares = 100;
    await realEstateToken.connect(user1).setApprovalForAll(marketplace.address, true);
    await marketplace.connect(user1).listProperty(tokenId, pricePerShare, totalShares, {
      value: ethers.parseEther("0.01"), // Send listing fee
    });

    // Check if the property is listed
    const listing = await marketplace.listings(1);
    expect(listing.owner).to.equal(user1.address);
    expect(listing.tokenId).to.equal(tokenId);
    expect(listing.pricePerShare).to.equal(pricePerShare);
    expect(listing.totalShares).to.equal(totalShares);
    expect(listing.sharesAvailable).to.equal(totalShares);
  });

  it("Should allow unlisting a property", async function () {
    // User1 lists a property
    const tokenId = 1;
    const pricePerShare = 1000;
    const totalShares = 100;
    await realEstateToken.connect(user1).setApprovalForAll(marketplace.address, true);
    await marketplace.connect(user1).listProperty(tokenId, pricePerShare, totalShares, {
      value: ethers.parseEther("0.01"), // Send listing fee
    });

    // User1 unlists the property
    await marketplace.connect(user1).unlistProperty(1);

    // Check if the property is unlisted
    const listing = await marketplace.listings(1);
    expect(listing.owner).to.equal(ethers.constants.AddressZero);
    expect(listing.tokenId).to.equal(0);
    expect(listing.pricePerShare).to.equal(0);
    expect(listing.totalShares).to.equal(0);
    expect(listing.sharesAvailable).to.equal(0);
  });

  it("Should allow purchasing shares of a property", async function () {
    // User1 lists a property
    const tokenId = 1;
    const pricePerShare = 1000;
    const totalShares = 100;
    await realEstateToken.connect(user1).setApprovalForAll(marketplace.address, true);
    await marketplace.connect(user1).listProperty(tokenId, pricePerShare, totalShares, {
      value: ethers.parseEther("0.01"), // Send listing fee
    });

    // User2 purchases 10 shares of the property
    const sharesToBuy = 10;
    await marketplace.connect(user2).purchaseShares(1, sharesToBuy, {
      value: pricePerShare * sharesToBuy,
    });

    // Check user2's balance of property shares
    const balance = await realEstateToken.balanceOf(user2.address, tokenId);
    expect(balance).to.equal(sharesToBuy);

    // Check the remaining shares available in the listing
    const listing = await marketplace.listings(1);
    expect(listing.sharesAvailable).to.equal(totalShares - sharesToBuy);
  });
});
