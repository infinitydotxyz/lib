"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenStandardVersion = exports.WyvernSchemaName = exports.OrderType = exports.ListingType = exports.OrderSide = void 0;
var OrderSide;
(function (OrderSide) {
    OrderSide[OrderSide["Buy"] = 0] = "Buy";
    OrderSide[OrderSide["Sell"] = 1] = "Sell";
})(OrderSide = exports.OrderSide || (exports.OrderSide = {}));
var ListingType;
(function (ListingType) {
    ListingType["FixedPrice"] = "fixedPrice";
    ListingType["DutchAuction"] = "dutchAuction";
    ListingType["EnglishAuction"] = "englishAuction";
})(ListingType = exports.ListingType || (exports.ListingType = {}));
var OrderType;
(function (OrderType) {
    OrderType[OrderType["BUY"] = 0] = "BUY";
    OrderType[OrderType["SELL"] = 1] = "SELL";
})(OrderType = exports.OrderType || (exports.OrderType = {}));
var WyvernSchemaName;
(function (WyvernSchemaName) {
    WyvernSchemaName["ERC20"] = "ERC20";
    WyvernSchemaName["ERC721"] = "ERC721";
    WyvernSchemaName["ERC1155"] = "ERC1155";
    WyvernSchemaName["LegacyEnjin"] = "Enjin";
    WyvernSchemaName["ENSShortNameAuction"] = "ENSShortNameAuction";
    WyvernSchemaName["CryptoPunks"] = "CryptoPunks";
})(WyvernSchemaName = exports.WyvernSchemaName || (exports.WyvernSchemaName = {}));
/**
 * The NFT version that this contract uses.
 * ERC721 versions are:
 * 1.0: CryptoKitties and early 721s, which lack approve-all and
 *      have problems calling `transferFrom` from the owner's account.
 * 2.0: CryptoSaga and others that lack `transferFrom` and have
 *      `takeOwnership` instead
 * 3.0: The current OpenZeppelin standard:
 *      https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/token/ERC721/ERC721.sol
 * Special cases:
 * locked: When the transfer function has been locked by the dev
 */
var TokenStandardVersion;
(function (TokenStandardVersion) {
    TokenStandardVersion["Unsupported"] = "unsupported";
    TokenStandardVersion["Locked"] = "locked";
    TokenStandardVersion["Enjin"] = "1155-1.0";
    TokenStandardVersion["ERC721v1"] = "1.0";
    TokenStandardVersion["ERC721v2"] = "2.0";
    TokenStandardVersion["ERC721v3"] = "3.0";
})(TokenStandardVersion = exports.TokenStandardVersion || (exports.TokenStandardVersion = {}));
