require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    evmtestnet: {
      url: "https://evmtestnet.confluxrpc.com",
      accounts: ["YOUR-PRIVATE-KEY"],
    }
  },
};
