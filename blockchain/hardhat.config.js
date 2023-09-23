require("@nomicfoundation/hardhat-toolbox");



/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks:{
    mumbai:{
      url:'https://polygon-mumbai.g.alchemy.com/v2/h6deDrFFq8FqJO9fxxzf1h7CG9cbwk_O',
      accounts:['c0d52686e9b4b79391f610944c501b5922130e5c54263a7a533b53d9ed356220']
    }
  },
  gasReporter:{
    enabled: true,
    currency:'USD',
    gasPrice: 21
  }
};
