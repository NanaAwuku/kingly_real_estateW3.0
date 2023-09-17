// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract RealEstateNFT is ERC1155 {
    address public owner;

    struct Property {
        string name;
        string location;
        uint256 price;
        string imageURI;
    }

    mapping(uint256 => Property) public properties;
    uint256 public tokenIdCounter;

    constructor() ERC1155("https://your-metadata-uri.com/api/token/{id}.json") {
        owner = msg.sender;
        tokenIdCounter = 1;
    }

    function mint(address account, string memory name, string memory location, uint256 price, string memory imageURI, uint256 amount) external {
        require(msg.sender == owner, "Only the owner can mint.");
        uint256 tokenId = tokenIdCounter++;
        properties[tokenId] = Property(name, location, price, imageURI);
        _mint(account, tokenId, amount, "");
    }
    // function totalSupply() public view returns  (uint){
    //     return
    // }
}
