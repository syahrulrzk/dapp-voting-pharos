async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with account:", deployer.address);

  const ZenithToken = await ethers.getContractFactory("ZenithToken");
  const zenith = await ZenithToken.deploy();
  await zenith.deployed();
  console.log("ZenithToken deployed to:", zenith.address);

  const Voting = await ethers.getContractFactory("Voting");
  const voting = await Voting.deploy(zenith.address);  // kalau Voting kontrak butuh token address
  await voting.deployed();
  console.log("Voting contract deployed to:", voting.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
