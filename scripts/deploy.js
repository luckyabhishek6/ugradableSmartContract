const{ethers,upgrades}=require("hardhat");

async function main (){
  const NUM1= await ethers.getContractFactory("NUM1");
  console.log("deploying NUM version 1");
  const num1=await upgrades.deployProxy(NUM1,[10],{
    initializer:"update",
  });
await num1.waitForDeployment();
console.log("NUM1 deployed address:",await num1.getAddress());
}
main();

//0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9
//0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512 live