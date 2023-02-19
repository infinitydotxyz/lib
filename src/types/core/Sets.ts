export interface SetsQuery {
  minPrice: number;
  maxPrice: number;
}

export interface SetsResponse {
  data: {
    collectionAddress: string;
    collectionName: string;
    tokenId: string;
    priceEth: number;
    isSellOrder: boolean;
    tokenImage: string;
  }[];
}
