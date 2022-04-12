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
export enum MarketOrder {
  SellOrders = 'sellOrders',
  BuyOrders = 'buyOrders',
}

export enum MarketAction {
  List = 'list',
  Delete = 'delete',
  Move = 'move',
  Match = 'match',
  Buy = 'buy',
}

export enum MarketListId {
  ValidActive = 'validActive',
  ValidInactive = 'validInactive',
  Invalid = 'invalid',
}

export interface MarketListingsBody {
  orderType: MarketOrder;
  action: MarketAction;
  listId?: MarketListId;
  orderId?: string; // delete and move
  moveListId?: MarketListId;
  cursor?: string;
  limit?: number;
}

export interface MarketListOrders {
  orders: OBOrder[];
  cursor: string;
}

export interface MarketListingsResponse {
  buyOrders: MarketListOrders;
  sellOrders: MarketListOrders;
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
