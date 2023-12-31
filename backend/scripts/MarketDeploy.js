const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying RealEstateMarketplace contract with the account:", deployer.address);

  // Set the address of the deployed RealEstateToken contract
  const realEstateTokenAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Replace with the actual address

  const listingFee = ethers.parseEther("0.01"); // Listing fee in Ether

  const RealEstateMarketplace = await ethers.getContractFactory("RealEstateMarketplace");
  const marketplace = await RealEstateMarketplace.deploy(realEstateTokenAddress, listingFee);

  await marketplace.waitForDeployment();

  console.log("RealEstateMarketplace contract deployed to:", await marketplace.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
