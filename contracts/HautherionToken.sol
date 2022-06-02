// SPDX-License-Identifier: MIT

pragma solidity ^0.8.14;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Capped.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract HautherionToken is ERC20Capped, ERC20Burnable {
    address payable owner;
    uint256 public blockReward;
    mapping (address => uint256) addressFaucetCooldown;
    
    constructor(uint256 cap, uint reward) ERC20("Hautherion", "HAUTH") ERC20Capped(cap * (10 ** decimals())) {
        _mint(msg.sender, 1000000 * (10 ** decimals()));
        owner = payable(msg.sender);
        blockReward = reward * (10 ** decimals());
    }

    /**
     * @dev See {ERC20Capped-_mint}.
     */
    function _mint(address account, uint256 amount) internal virtual override(ERC20Capped, ERC20) {
        require(ERC20.totalSupply() + amount <= cap(), "ERC20Capped: cap exceeded");
        super._mint(account, amount);
    }

    function _mintMinerReward() internal {
        _mint(block.coinbase, blockReward);
    }

    function _beforeTokenTransfer(address from, address to, uint256 value) internal virtual override {
        if (from != address(0) && to != block.coinbase && block.coinbase != address(0)) {
          _mintMinerReward();
        }
        super._beforeTokenTransfer(from, to, value);
    }

    function receiveTenTokens() public {
        // Cooldown of 604800 seconds (7 days) before receiving tokens again.
        require((block.timestamp - addressFaucetCooldown[msg.sender]) > 604800, "You cannot retrieve tokens yet.");
        addressFaucetCooldown[msg.sender] = block.timestamp;
        _mint(msg.sender, 10 * (10 ** decimals()));
    }

    function getBlockReward() public view returns (uint256) {
        return blockReward;
    }

    function setBlockReward(uint256 reward) public onlyOwner {
        blockReward = reward * (10 ** decimals());
    }

    // Contract destructor
    function destroy() public onlyOwner {
        selfdestruct(owner);
    }

    // Access control modifier
    modifier onlyOwner {
        require(msg.sender == owner, "Only the contract owner can call this function");
        _;
    }
}