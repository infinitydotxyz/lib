"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshTokenFlow = exports.TokenStandard = void 0;
var TokenStandard;
(function (TokenStandard) {
    TokenStandard["ERC721"] = "ERC721";
    TokenStandard["ERC1155"] = "ERC1155";
})(TokenStandard = exports.TokenStandard || (exports.TokenStandard = {}));
var RefreshTokenFlow;
(function (RefreshTokenFlow) {
    RefreshTokenFlow["Mint"] = "mint";
    /**
     * get the token uri
     */
    RefreshTokenFlow["Uri"] = "token-uri";
    /**
     * get the token metadata
     */
    RefreshTokenFlow["Metadata"] = "token-metadata";
    RefreshTokenFlow["CacheImage"] = "token-cache-image";
    /**
     * upload the image to gcs
     */
    RefreshTokenFlow["Image"] = "token-image";
    RefreshTokenFlow["Complete"] = "complete";
})(RefreshTokenFlow = exports.RefreshTokenFlow || (exports.RefreshTokenFlow = {}));
