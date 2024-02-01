const{ethers,upgrades}=require("hardhat");

async function main(){
    const NUM3=await ethers.getContractFactory("NUM3");
    await upgrades.upgradeProxy("0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",NUM3);
    console.log("num2 updraded to num3")
}
main();


// 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512