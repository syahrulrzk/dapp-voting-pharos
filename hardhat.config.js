require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    pharos: {
      url: "https://testnet.dplabs-internal.com",
      // kalau perlu pakai private key untuk deploy:
      // accounts: [process.env.PRIVATE_KEY],
    },
  },
};
