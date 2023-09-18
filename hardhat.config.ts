require("@nomicfoundation/hardhat-toolbox");

const PRIVATE_KEY = "ijAUm7aeUtDq3-QSuHSa0bPLBYK7tTbc"
const PRIVATE_HTTP_KEY = "https://eth-sepolia.g.alchemy.com/v2/ijAUm7aeUtDq3-QSuHSa0bPLBYK7tTbc"

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${PRIVATE_KEY}`,
      account: [PRIVATE_HTTP_KEY],
    },
  },
};