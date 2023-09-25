// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC1155/IERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RealEstateMarketplace is Ownable {
    IERC1155 public realEstateToken;  // Reference to the ERC1155 token representing real estate shares
    uint256 public listingFee;       // Fee required to list a property on the marketplace
    uint256 public nextListingId;    // ID for the next property listing

    struct Listing {
        address owner;
        uint256 tokenId;
        uint256 pricePerShare;
        uint256 totalShares;
        uint256 sharesAvailable;
    }

    mapping(uint256 => Listing) public listings;

    event PropertyListed(uint256 indexed listingId, uint256 indexed tokenId, uint256 pricePerShare, uint256 totalShares);
    event PropertyUnlisted(uint256 indexed listingId);
    event PropertyPurchased(uint256 indexed listingId, address indexed buyer, uint256 sharesPurchased);

    constructor(address _realEstateToken, uint256 _listingFee) {
        realEstateToken = IERC1155(_realEstateToken);
        listingFee = _listingFee;
        nextListingId = 1;
    }

    function listProperty(uint256 tokenId, uint256 pricePerShare, uint256 totalShares) external payable {
        require(totalShares > 0, "Total shares must be greater than 0");
        require(realEstateToken.balanceOf(msg.sender, tokenId) >= totalShares, "Insufficient balance");
        require(msg.value == listingFee, "Listing fee not paid");

        listings[nextListingId] = Listing({
            owner: msg.sender,
            tokenId: tokenId,
            pricePerShare: pricePerShare,
            totalShares: totalShares,
            sharesAvailable: totalShares
        });

        nextListingId++;

        emit PropertyListed(nextListingId - 1, tokenId, pricePerShare, totalShares);
    }

    function unlistProperty(uint256 listingId) external {
        Listing storage listing = listings[listingId];
        require(msg.sender == listing.owner, "Only the owner can unlist the property");

        delete listings[listingId];

        emit PropertyUnlisted(listingId);
    }

    function purchaseShares(uint256 listingId, uint256 sharesToBuy) external payable {
        Listing storage listing = listings[listingId];
        require(listing.sharesAvailable >= sharesToBuy, "Not enough shares available");
        require(msg.value == listing.pricePerShare * sharesToBuy, "Incorrect payment amount");

        // Transfer ownership of shares
        realEstateToken.safeTransferFrom(listing.owner, msg.sender, listing.tokenId, sharesToBuy, "");

        // Update listing information
        listing.sharesAvailable -= sharesToBuy;

        // Transfer payment to the seller (you should implement a secure payment mechanism)
        payable(listing.owner).transfer(msg.value);

        emit PropertyPurchased(listingId, msg.sender, sharesToBuy);
    }
}
