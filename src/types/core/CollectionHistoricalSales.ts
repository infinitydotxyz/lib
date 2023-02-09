export enum HistoricalSalesTimeBucket {
  ONE_HOUR = '1h',
  SIX_HOURS = '6h',
  ONE_DAY = '1d',
  TWO_DAYS = '2d',
  ONE_WEEK = '7d',
  ONE_MONTH = '30d'
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
