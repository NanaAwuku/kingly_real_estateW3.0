// Import necessary modules from Hardhat and ethers.js
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("RealEstateToken", function () {
  let owner;
  let user;
  let realEstateToken;
  const baseTokenURI = "https://ipfs.io/ipfs/bafyreib2rlfu6rvqgpkeyris5bsbtabi4duq6jyyuo7c6opwhjmxkbpnjm/{id}.json";

  async function deployRealEstateFixture() {
    // Contracts are deployed using the first voter/account by default
    [owner, user] = await ethers.getSigners();

    const RealEstateToken = await ethers.getContractFactory("RealEstateToken");
    realEstateToken = await RealEstateToken.deploy(baseTokenURI); // Pass the URI as an argument
    await realEstateToken.waitForDeployment();

    return { owner, user, realEstateToken };
  }

  beforeEach(async function () {
    // Deploy a fresh instance of the contract before each test
    const fixture = await deployRealEstateFixture();
    owner = fixture.owner;
    user = fixture.user;
    realEstateToken = fixture.realEstateToken;
  });

  it("Should create a property", async function () {
    // Create a property using the createProperty function
    await realEstateToken.createProperty("Property 3", "Location 3", 200, 200, 1500);

    const property = await realEstateToken.properties(3);
    expect(property.name).to.equal("Property 3");
    expect(property.location).to.equal("Location 3");
    expect(property.totalSupply).to.equal(200);
    expect(property.availableSupply).to.equal(200);
    expect(property.pricePerShare).to.equal(1500);
  });

  // ... (other test cases)
});
