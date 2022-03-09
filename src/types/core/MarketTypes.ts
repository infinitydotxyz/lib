export interface MarketOrder {
  user: string;
  expiration: number;
}

export interface BuyOrder extends MarketOrder {
  collections: string[];
  minNFTs: number;
  budget: number;
}

export interface SellOrder extends MarketOrder {
  nftAddress: string;
  collection: string;
  price: number;
}
