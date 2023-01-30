export enum HistoricalSalesTimeBucket {
  ONE_HOUR = '1h',
  ONE_DAY = '1d',
  ONE_WEEK = '7d',
  ONE_MONTH = '30d',
  ONE_YEAR = '1y'
}

export interface CollectionHistoricalSale {
  salePriceEth: number;
  timestamp: number;
  tokenImage: string;
  tokenId: string;
  collectionAddress: string;
  collectionName: string;
  chainId: string;
  txHash: string;
  marketplace: string;
  marketplaceAddress: string;
  seller: string;
  buyer: string;
  quantity: string;
}
