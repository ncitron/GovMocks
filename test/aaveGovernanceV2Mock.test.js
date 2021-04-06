const { expect } = require("chai");

describe("AaveGovernanceV2Mock", function() {
  it("Should emit a ProposalCreated event", async function() {
    const Aave = await ethers.getContractFactory("AaveGovernanceV2Mock");
    const aave = await Aave.deploy();
    
    await aave.deployed();

    await expect(aave.propose(1, 10, 49)).to.emit(aave, "ProposalCreated");
  });
});
