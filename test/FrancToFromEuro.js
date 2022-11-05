const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("FrancToFromEuro", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const FrancToFromEuro = await ethers.getContractFactory("FrancToFromEuro");
    const francToFromEuro = await FrancToFromEuro.deploy();

    return { francToFromEuro, owner, otherAccount };
  }

  describe("Convert", function () {
    describe("From Euro", function () {
      it("Should return 19678710000000000000", async function () {
        const { francToFromEuro } = await loadFixture(deployFixture);

        await expect(
          await francToFromEuro.convert_to_franc("3000000000000000000")
        ).to.be.equal("19678710000000000000", "Not right converted");
      });
    });

    describe("From Franc", function () {
      it("Should return 457347051712200000", async function () {
        const { francToFromEuro } = await loadFixture(deployFixture);

        await expect(
          await francToFromEuro.convert_to_euro("3000000000000000000")
        ).to.be.equal("457347051712200000", "Not right converted");
      });
    });
  });
});
