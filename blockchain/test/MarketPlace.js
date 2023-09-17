const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");

const tokens=(n)=>{
  return ethers.parseUnits(n.toString(), 'ether')
}

describe("MartketPlace", function () {
  async function deployMarketPlaceFixture() {

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const MartketPlace = await ethers.getContractFactory("MartketPlace");
    const marketPlace = await MartketPlace.deploy();

    return { marketPlace,owner, otherAccount };
  }

it("Saves the Addresses", async function () {
      const { marketPlace, owner } = await loadFixture(deployMarketPlaceFixture);

      expect(await owner.address).to.equal(owner);
    });
  

 
});
