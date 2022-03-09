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
  address: string;
  name: string;
  collection: string;
  price: number;
}

export interface BuyOrderMatch {
  buyOrder: BuyOrder;
  sellOrders: SellOrder[];
}
