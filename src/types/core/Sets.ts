export interface SetsQuery {
  minPrice: number;
  maxPrice: number;
}

export interface SetsResponse {
  data: SetsDataItem[];
}

export interface SetsDataItem {
  collectionAddress: string;
  collectionName: string;
  tokenId: string;
  priceEth: number;
  tokenImage: string;
  isSellOrder: boolean;
  lastPriceEth?: number;
}
