// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RealEstateMarketplace is Ownable {
    IERC1155 public nftContract;

    struct Listing {
        address seller;
        uint256 tokenId;
        uint256 price;
        bool isAvailable;
    }

    mapping(uint256 => Listing) public listings;
    uint256 public listingCount;

    constructor(address _nftContract) {
        nftContract = IERC1155(_nftContract);
    }

    function listProperty(uint256 tokenId, uint256 price) external {
        require(nftContract.balanceOf(msg.sender, tokenId) > 0, "You don't own this property.");
        require(!listings[tokenId].isAvailable, "Property is already listed.");
        
        listings[tokenId] = Listing({
            seller: msg.sender,
            tokenId: tokenId,
            price: price,
            isAvailable: true
        });

        listingCount++;
    }

    function buyProperty(uint256 tokenId) external payable {
        Listing storage listing = listings[tokenId];
        require(listing.isAvailable, "Property is not available for purchase.");
        require(msg.sender != listing.seller, "You can't buy your own property.");
        require(msg.value >= listing.price, "Insufficient funds.");

        // Transfer the property NFT to the buyer
        nftContract.safeTransferFrom(listing.seller, msg.sender, tokenId, 1, "");

        // Transfer funds to the seller
        payable(listing.seller).transfer(msg.value);

        // Mark the property as sold
        listing.isAvailable = false;
    }
}
