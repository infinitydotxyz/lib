"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nftDataSources = exports.NFTDataSourceToIndex = exports.NFTDataSource = exports.OrderDirection = void 0;
var OrderDirection;
(function (OrderDirection) {
    OrderDirection["Ascending"] = "asc";
    OrderDirection["Descending"] = "desc";
})(OrderDirection = exports.OrderDirection || (exports.OrderDirection = {}));
var NFTDataSource;
(function (NFTDataSource) {
    NFTDataSource["Infinity"] = "infinity";
    NFTDataSource["OpenSea"] = "opensea";
    NFTDataSource["Unmarshal"] = "unmarshal";
    NFTDataSource["Alchemy"] = "alchemy";
    NFTDataSource["Covalent"] = "covalent";
})(NFTDataSource = exports.NFTDataSource || (exports.NFTDataSource = {}));
exports.NFTDataSourceToIndex = {
    [NFTDataSource.Infinity]: 0,
    [NFTDataSource.OpenSea]: 1,
    [NFTDataSource.Unmarshal]: 2,
    [NFTDataSource.Alchemy]: 3,
    [NFTDataSource.Covalent]: 4
};
exports.nftDataSources = {
    0: NFTDataSource.Infinity,
    1: NFTDataSource.OpenSea,
    2: NFTDataSource.Unmarshal,
    3: NFTDataSource.Alchemy,
    4: NFTDataSource.Covalent
};
