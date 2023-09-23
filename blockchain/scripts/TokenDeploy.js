
const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying RealEstateToken contract with the account:", deployer.address);

  const baseURI = "https://ipfs.io/ipfs/bafyreib2rlfu6rvqgpkeyris5bsbtabi4duq6jyyuo7c6opwhjmxkbpnjm/{id}.json";

  const RealEstateToken = await ethers.getContractFactory("RealEstateToken");
  const realEstateToken = await RealEstateToken.deploy(baseURI);

  await realEstateToken.waitForDeployment();

  console.log("RealEstateToken contract deployed to:", realEstateToken.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
