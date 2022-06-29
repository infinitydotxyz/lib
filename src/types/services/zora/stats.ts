export interface ZoraAggregateCollectionStatsResponse {
  aggregateStat: {
    ownerCount: number;
    ownersByCount: ZoraTopOwnersByCount;
    salesVolume: {
      chainTokenPrice: number;
      totalCount: number;
      usdcPrice: number;
    };
    nftCount: number;
  };
}

export interface ZoraTopOwnersByCount {
  nodes: Array<{ count: number; owner: string }>;
}
