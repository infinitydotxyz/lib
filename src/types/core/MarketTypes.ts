export interface MarketOrder {
  user: string;
  expiration: number;
  chainId: string;
}

export interface BuyOrder extends MarketOrder {
  collectionAddresses: string[];
  minNFTs: number;
  budget: number;
}

export interface SellOrder extends MarketOrder {
  tokenId: string;
  tokenName: string;
  collectionAddress: string;
  collectionName: string;
  price: number;
}

export interface BuyOrderMatch {
  buyOrder: BuyOrder;
  sellOrders: SellOrder[];
}
