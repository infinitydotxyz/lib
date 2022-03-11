import crypto from 'crypto';

export interface MarketOrder {
  // firebase id
  id?: string;
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

export type MarketOrderType = 'sellOrders' | 'buyOrders';
export type MarketActionType = 'list' | 'delete' | 'move';
export type MarketListIdType = 'validActive' | 'validInactive' | 'invalid';

export interface MarketListingsBody {
  orderType: MarketOrderType;
  action: MarketActionType;
  listId?: MarketListIdType;
  orderId?: string; // delete and move
  moveListId?: MarketListIdType;
}

export interface MarketListingsResponse {
  result: MarketOrder[];
  success: string;
  error: string;
}

export const orderHash = (obj: MarketOrder): string => {
  const copy = JSON.parse(JSON.stringify(obj));

  // we don't want the id part of the hash
  copy.id = undefined;

  const data = JSON.stringify(copy);

  return crypto.createHash('sha256').update(data).digest('hex').trim().toLowerCase();
};

export const isOrderEqual = (a: MarketOrder, b: MarketOrder): boolean => {
  // use ids if set
  if (a.id && b.id) {
    return a.id === b.id;
  }

  return orderHash(a) === orderHash(b);
};

export const isBuyOrder = (obj: any): obj is BuyOrder => {
  return !isSellOrder(obj);
};

export const isSellOrder = (obj: any): obj is SellOrder => {
  return obj.price !== undefined;
};
