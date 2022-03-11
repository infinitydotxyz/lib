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
export type MarketActionType = 'list' | 'add' | 'delete' | 'move';
export type MarketListIdType = 'validActive' | 'validInactive' | 'invalid';

export interface MarketListingsBody {
  orderType: MarketOrderType;
  action: MarketActionType;
  listId?: MarketListIdType;
  moveListId?: MarketListIdType;
}

export interface MarketListingsResponse {
  result: MarketOrder[];
  error: string;
}

export const hashOrder = (obj: any): string => {
  const copy = JSON.parse(JSON.stringify(obj));

  // we don't want the id part of the hash
  copy['id'].delete();

  const data = JSON.stringify(copy);

  return crypto.createHash('sha256').update(data).digest('hex').trim().toLowerCase();
};

export const isOrderEqual = (a: any, b: any): boolean => {
  // use ids if set
  if (a['id'] && b['id']) {
    return a['id'] === b['id'];
  }

  return hashOrder(a) === hashOrder(b);
};
