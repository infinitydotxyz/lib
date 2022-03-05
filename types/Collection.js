"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreationFlow = void 0;
var CreationFlow;
(function (CreationFlow) {
    /**
     * get collection deployer info and owner
     */
    CreationFlow["CollectionCreator"] = "collection-creator";
    /**
     * get the collection level metadata
     * links, name, description, images, symbol
     */
    CreationFlow["CollectionMetadata"] = "collection-metadata";
    /**
     * get all token ids, timestamp and block minted
     * and minter
     */
    CreationFlow["CollectionMints"] = "collection-mints";
    /**
     * get metadata for every token
     */
    CreationFlow["TokenMetadata"] = "token-metadata";
    /**
     * get metadata for every token from opensea
     */
    // TokenMetadataOS = 'token-metadata-os',
    /**
     * get metadata for every token from uri
     */
    CreationFlow["TokenMetadataUri"] = "token-metadata-uri";
    /**
     * requires that we have every token
     */
    CreationFlow["AggregateMetadata"] = "aggregate-metadata";
    /**
     * cache image
     */
    CreationFlow["CacheImage"] = "cache-image";
    /**
     * validate images
     */
    CreationFlow["ValidateImage"] = "validate-image";
    /**
     * at this point we have successfully completed all steps above
     */
    CreationFlow["Complete"] = "complete";
    /**
     * at this point we have successfully completed all steps but some data is missing
     */
    CreationFlow["Incomplete"] = "incomplete";
    /**
     * at this point you give up
     */
    CreationFlow["Unknown"] = "unknown";
})(CreationFlow = exports.CreationFlow || (exports.CreationFlow = {}));
