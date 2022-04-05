import { BigNumberish, BytesLike } from 'ethers';

export interface Item {
  collection: string;
  tokenIds: BigNumberish[];
}

export interface ExecParams {
  complicationAddress: string;
  currencyAddress: string;
}

export interface ExtraParams {
  buyer?: string;
}

export interface OBOrder {
  id: string;
  chainId: BigNumberish;
  isSellOrder: boolean;
  signerAddress: string;
  numItems: BigNumberish;
  startPrice: BigNumberish;
  endPrice: BigNumberish;
  startTime: BigNumberish;
  endTime: BigNumberish;
  minBpsToSeller: BigNumberish;
  nonce: BigNumberish;
  nfts: Item[];
  execParams: ExecParams;
  extraParams: ExtraParams;
}
export interface SignedOBOrder {
  isSellOrder: boolean;
  signer: string;
  constraints: BigNumberish[];
  nfts: Item[];
  execParams: string[];
  extraParams: BytesLike;
  sig: BytesLike;
}

export interface BuyOrderMatch {
  buyOrder: OBOrder;
  sellOrders: OBOrder[];
}

// ===============================================
// API parameter and response types (/marketListings)

export type MarketOrderType = 'sellOrders' | 'buyOrders';
export type MarketActionType = 'list' | 'delete' | 'move' | 'match' | 'buy';
export type MarketListIdType = 'validActive' | 'validInactive' | 'invalid';

export interface MarketListingsBody {
  orderType: MarketOrderType;
  action: MarketActionType;
  listId?: MarketListIdType;
  orderId?: string; // delete and move
  moveListId?: MarketListIdType;
}

export interface MarketListingsResponse {
  buyOrders: OBOrder[];
  sellOrders: OBOrder[];
  matches: BuyOrderMatch[];
  success: string;
  error: string;
}

// ===============================================
// API parameter and response types (/:user/market)

export interface TradeBody {
  buyOrder?: OBOrder;
  sellOrder?: OBOrder;
}

export interface TradeReq {
  user?: string;
}

export interface TradeResponse {
  matches: BuyOrderMatch[];
  success: string;
  error: string;
}
