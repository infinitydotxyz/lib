export declare enum OrderDirection {
    Ascending = "asc",
    Descending = "desc"
}
export declare enum NFTDataSource {
    Infinity = "infinity",
    OpenSea = "opensea",
    Unmarshal = "unmarshal",
    Alchemy = "alchemy",
    Covalent = "covalent"
}
export declare const NFTDataSourceToIndex: {
    [key: string]: number;
};
export declare const nftDataSources: {
    [key: string | number]: NFTDataSource;
};
