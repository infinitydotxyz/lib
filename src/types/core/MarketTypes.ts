export interface MarketOrder {
  expiration: number;
}

export interface BuyOrder extends MarketOrder {
  user: string;
  collections: string[];
  minNFTs: number;
  budget: number;
}

export interface SellOrder extends MarketOrder {
  user: string;
  nftAddress: string;
  collection: string;
  price: number;
}
