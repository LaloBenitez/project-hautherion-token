// npx hardhat test  

const { expect } = require("chai");
const { ethers } = require("hardhat");

let Hautherion;
let hautherion;
let accounts;

beforeEach(async() => {
    Hautherion = await ethers.getContractFactory("HautherionToken");
    hautherion = await Hautherion.deploy(100000000, 25);
    await hautherion.deployed();
});

describe("Hautherion Token Contract", function() {
    it("Should return the name of the Token (Hautherion).", async function() {
        expect(await hautherion.name()).to.equal("Hautherion");

    });

    it("Should return the ticker of the Token (HAUTH).", async function() {
        expect(await hautherion.symbol()).to.equal("HAUTH");
    });

    it("Should return total supply as balance of Contract signer", async function() {
        const totalSupply = await hautherion.totalSupply();
        const [owner] = await ethers.getSigners();
        expect(await hautherion.balanceOf(owner.address)).to.equal(totalSupply);
    });

    it("Should return 1000000*10^18 as total supply", async function() {
        expect(await hautherion.totalSupply()).to.equal("1000000000000000000000000");
    });

    it("Should return 25*10^18 as block reward ", async function() {
        expect(await hautherion.getBlockReward()).to.equal('25000000000000000000');
    });

    it("Should return 18 as decimals", async function() {
        expect(await hautherion.decimals()).to.equal(18);
    });

    it("Should return 100000000*10^18 as total cap.", async function() {
        expect(await hautherion.cap()).to.equal('100000000000000000000000000');
    });

    it("Should set block reward if OWNER calls setBlockReward", async function() {
        const [owner] = await ethers.getSigners();
        await hautherion.connect(owner).setBlockReward(50);
        expect(await hautherion.getBlockReward()).to.equal('50000000000000000000');
    });

    it("Should not set block reward if not OWNER.", async function() {
        const [owner, acc1] = await ethers.getSigners();
        try {
            await hautherion.connect(acc1).setBlockReward(50);
            expect(false);
        } catch (err) {
            expect(err);
        }
        expect(await hautherion.getBlockReward()).to.not.equal('50000000000000000000');
    });

    it("Should send 10 tokens from owner to acc1", async function() {
        const [owner, acc1] = await ethers.getSigners();
        const ownerInitialBalance = await hautherion.balanceOf(owner.address);
        const acc1InitialBalance = await hautherion.balanceOf(acc1.address);
        await hautherion.connect(owner).transfer(acc1.address, 50);
        // TODO: use ownerInitialBalance and acc1InitialBalance to compute difference instead
        expect(await hautherion.balanceOf(owner.address)).to.equal('999999999999999999999950');
        expect(await hautherion.balanceOf(acc1.address)).to.equal('50');
    });

});