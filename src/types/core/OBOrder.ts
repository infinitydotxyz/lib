import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { BytesLike } from '@ethersproject/bytes';
import { nowSeconds } from '../../utils';

// exchange types
export interface OBTokenInfo {
  tokenId: string;
  tokenName: string;
  imageUrl: string;
  numTokens: number;
}

export interface OBOrderItem {
  collectionAddress: string;
  collectionName: string;
  profileImage: string;
  tokens: OBTokenInfo[];
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
  chainId: string;
  isSellOrder: boolean;
  numItems: string;
  makerUsername: string;
  makerAddress: string;
  takerUsername: string;
  takerAddress: string;
  startPriceEth: number;
  endPriceEth: number;
  startPriceWei: string;
  endPriceWei: string;
  startTimeMs: number;
  endTimeMs: number;
  minBpsToSeller: number;
  nonce: string;
  nfts: OBOrderItem[];
  execParams: ExecParams;
  extraParams: ExtraParams;
}

export interface ChainOBOrder {
  isSellOrder: boolean;
  signer: string;
  constraints: BigNumberish[];
  nfts: OBOrderItem[];
  execParams: string[];
  extraParams: BytesLike;
  sig: BytesLike;
}

// signed order reqd for order execution
export interface SignedOBOrder extends OBOrder {
  signedOrder: ChainOBOrder;
}

export const getCurrentOBOrderPrice = (order: OBOrder): BigNumber => {
  const startTime = BigNumber.from(order.startTimeMs);
  const endTime = BigNumber.from(order.endTimeMs);
  const startPrice = BigNumber.from(order.startPriceWei);
  const endPrice = BigNumber.from(order.endPriceWei);
  const duration = endTime.sub(startTime);
  let priceDiff = BigNumber.from(0);
  if (startPrice.gt(endPrice)) {
    priceDiff = startPrice.sub(endPrice);
  } else {
    priceDiff = endPrice.sub(startPrice);
  }
  if (priceDiff.eq(0) || duration.eq(0)) {
    return startPrice;
  }
  const elapsedTime = BigNumber.from(nowSeconds()).sub(startTime);
  const precision = 10000;
  const portion = elapsedTime.gt(duration) ? 1 : elapsedTime.mul(precision).div(duration);
  priceDiff = priceDiff.mul(portion).div(precision);
  let currentPrice = BigNumber.from(0);
  if (startPrice.gt(endPrice)) {
    currentPrice = startPrice.sub(priceDiff);
  } else {
    currentPrice = startPrice.add(priceDiff);
  }
  return currentPrice;
};

export const isOrderExpired = (order: OBOrder): boolean => {
  // special case of never expire
  if (order.endTimeMs === 0) {
    return false;
  }

  return order.endTimeMs < Date.now();
};

export interface BuyOrderMatch {
  buyOrder: OBOrder;
  sellOrders: OBOrder[];
}

// ===============================================
// API parameter and response types (/marketListings)
export enum MarketOrder {
  SellOrders = 'sellOrders',
  BuyOrders = 'buyOrders'
}

export enum MarketAction {
  List = 'list',
  Delete = 'delete',
  Move = 'move',
  Match = 'match',
  Buy = 'buy'
}

export enum MarketListId {
  ValidActive = 'validActive',
  ValidInactive = 'validInactive',
  Invalid = 'invalid'
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
