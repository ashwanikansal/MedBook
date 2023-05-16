const ethers = require("ethers");
const fs = require("fs");
require('dotenv').config();
async function main() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
  const abi = fs.readFileSync("./simplestorage_sol_SimpleStorage.abi", "utf-8");
  const binary = fs.readFileSync(
    "./simplestorage_sol_SimpleStorage.bin",
    "utf-8"
  );

  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("deploying, please wait...");
  const contract = await contractFactory.deploy();
  await contract.deployTransaction.wait();
    const currentFavoriteNumber = await contract.retrieve();
    console.log(currentFavoriteNumber);

    const transactionResponse = await contract.store("7");
    const transactionReceipt = await transactionResponse.wait(1);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
