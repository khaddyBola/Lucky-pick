import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying PayLisk contract with the account:", deployer.address);

    const Lottery = await ethers.getContractFactory("Lottery");
    const lottery = await Lottery.deploy(); // Deploy the contract

    console.log("Target set to:", lottery.target);

    // Target set to: 0x2B1FfCd946472906684A9Aab029D51df0A54200b
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
