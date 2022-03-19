export interface Stats {
  chainId: string;

  collectionAddress: string;

  tokenId?: string;

  floorPrice: number;
  prevFloorPrice: number;
  floorPricePercentChange: number;

  ceilPrice: number;
  prevCeilPrice: number;
  ceilPricePercentChange: number;

  volume: number;
  prevVolume: number;
  volumePercentChange: number;

  numSales: number;
  prevNumSales: number;
  numSalesPercentChange: number;

  avgPrice: number;
  prevAvgPrice: number;
  avgPricePercentChange: number;

  /**
   * epoch timestamp (ms) that the stats
   * were last updated
   */
  updatedAt: number;
  /**
   * epoch timestamp (ms) corresponding to the docId
   * allows collectionGroup queries for specific
   * dates
   */
  timestamp: number;
}
