const{ethers,upgrades}=require("hardhat");

async function main(){
    const NUM2=await ethers.getContractFactory("NUM2");
    await upgrades.upgradeProxy("0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",NUM2);
    console.log("num2 updraded to num2")
}
main();