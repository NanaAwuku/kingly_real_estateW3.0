// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RealEstateToken is ERC1155, Ownable {
    struct Property {
        string name;
        string location;
        uint256 totalSupply;
        uint256 availableSupply;
        uint256 pricePerShare;
    }

    uint256 private nextTokenId = 1;
    mapping(uint256 => Property) public properties;

    constructor( string memory _baseURI) ERC1155(_baseURI) {
        
        // Initialize the contract with some example properties
        createProperty("Property 1", "Location 1", 100, 100, 1000);
        createProperty("Property 2", "Location 2", 50, 50, 2000);
    }

    function createProperty(
        string memory name,
        string memory location,
        uint256 totalSupply,
        uint256 availableSupply,
        uint256 pricePerShare
    ) public onlyOwner {
        uint256 tokenId = nextTokenId;
        nextTokenId++;

        properties[tokenId] = Property({
            name: name,
            location: location,
            totalSupply: totalSupply,
            availableSupply: availableSupply,
            pricePerShare: pricePerShare
        });

        _mint(msg.sender, tokenId, totalSupply, "");
    }

    function purchaseShares(uint256 tokenId, uint256 amount) public payable {
        require(amount > 0, "Amount must be greater than 0");
        require(
            properties[tokenId].availableSupply >= amount,
            "Not enough shares available"
        );
        require(
            msg.value == properties[tokenId].pricePerShare * amount,
            "Incorrect payment amount"
        );

        _mint(msg.sender, tokenId, amount, "");
        properties[tokenId].availableSupply -= amount;
    }

    function sellShares(uint256 tokenId, uint256 amount) public {
        require(
            balanceOf(msg.sender, tokenId) >= amount,
            "Not enough shares to sell"
        );

        _burn(msg.sender, tokenId, amount);
        properties[tokenId].availableSupply += amount;

        // Transfer payment to the seller (you should implement a secure payment mechanism)
        payable(msg.sender).transfer(
            properties[tokenId].pricePerShare * amount
        );
    }
}
