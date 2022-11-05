// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract FrancToFromEuro {
    function convert_to_franc(uint _amount) public pure returns (uint) {
        uint256 coef = 655957;
        return ((_amount * coef) / (10**5));
    }

    function convert_to_euro(uint _amount) public pure returns (uint) {
        uint256 coef = 655957;
        return (_amount / coef) * (10**5);
    }
}
