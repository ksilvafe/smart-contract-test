require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.PRIVATE_HTTP_KEY}`,
      account: [process.env.PRIVATE_KEY],
    },
  },
};