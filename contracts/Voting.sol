// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Voting {
    IERC20 public token;

    mapping(uint256 => uint256) public votes;  // candidateId => total votes

    constructor(address _token) {
        token = IERC20(_token);
    }

    function vote(uint256 candidateId, uint256 amount) public {
        require(token.transferFrom(msg.sender, address(this), amount), "Transfer failed");
        votes[candidateId] += amount;
    }

    function getVotes(uint256 candidateId) public view returns (uint256) {
        return votes[candidateId];
    }
}
