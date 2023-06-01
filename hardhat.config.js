require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    evmtestnet: {
      url: "https://evmtestnet.confluxrpc.com",
      accounts: ["6d61120eace48811c3f64d0a75599b43f4e61207d4c7802e7b2dacbb486d4fda"],
    }
  },
};
