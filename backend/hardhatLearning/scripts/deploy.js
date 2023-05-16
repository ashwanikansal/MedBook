const { ethers, artifacts } = require("hardhat");

async function main() {
  
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("deploying .....");
  const simpleStorage = await SimpleStorageFactory.deploy();

  await simpleStorage.deployed();

  console.log(`deployed contract to ${simpleStorage.address}`);

  const abi = await artifacts.readArtifact("SimpleStorage");

  // write the ABI to a file
  const fs = require("fs");
  fs.writeFileSync("SimpleStorageAbi.json", JSON.stringify(abi));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
