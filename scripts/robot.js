// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

const GravatarRegistryContractAddress = "0xe51de16bd52e1e938693a83cc35a9fa171e56f94"

async function main() {
  const GravatarRegistry = await hre.ethers.getContractFactory("GravatarRegistry");
  const contractInstance = await GravatarRegistry.attach(GravatarRegistryContractAddress)
  
  const result = await contractInstance.updateGravatarName("david_" + Math.random())
  console.log(`Robot updated gravatar name result: ` + JSON.stringify(result))
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
function doJob() {
  console.log('--- JOB START ---')
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
}

setInterval(doJob, process.env.ROBOT_INTERVAL || 5000);

