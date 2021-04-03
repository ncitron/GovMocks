const { expect } = require("chai");

describe("CompoundBravoMock", function() {
  it("Should emit a ProposalCreated event", async function() {
    const Bravo = await ethers.getContractFactory("CompoundBravoMock");
    const bravo = await Bravo.deploy();
    
    await bravo.deployed();

    await expect(bravo.propose(1, 10, 49)).to.emit(bravo, "ProposalCreated");
  });
});
