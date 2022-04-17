import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { BytesLike } from '@ethersproject/bytes';
import { nowSeconds } from '../../utils';

// exchange types
export interface TokenInfo {
  tokenId: BigNumberish;
  numTokens: BigNumberish;
}

export interface OrderItem {
  collection: string;
  tokens: TokenInfo[];
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
  nfts: OrderItem[];
  execParams: ExecParams;
  extraParams: ExtraParams;
}

export interface SignedOBOrder {
  isSellOrder: boolean;
  signer: string;
  constraints: BigNumberish[];
  nfts: OrderItem[];
  execParams: string[];
  extraParams: BytesLike;
  sig: BytesLike;
}

// dusplay types

export interface OBOrderSpecToken {
  tokenId: number;
  tokenName: string;
  imageUrl: string;
}

export interface OBOrderSpecNFT {
  collectionAddress: string;
  collectionName: string;
  profileImage: string;
  tokens: OBOrderSpecToken[];
}

export interface OBOrderSpec extends OBOrder {
  nftsWithMetadata: OBOrderSpecNFT[];
}

export const getCurrentOrderSpecPrice = (order: OBOrderSpec | OBOrder): BigNumber => {
  const startTime = BigNumber.from(order.startTime);
  const endTime = BigNumber.from(order.endTime);
  const startPrice = BigNumber.from(order.startPrice);
  const endPrice = BigNumber.from(order.endPrice);
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

export const isOrderSpecExpired = (order: OBOrderSpec): boolean => {
  // special case of never expire
  if (order.endTime === 0) {
    return false;
  }

  return order.endTime < Date.now();
};

export interface BuyOrderMatch {
  buyOrder: OBOrderSpec;
  sellOrders: OBOrderSpec[];
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
  orders: OBOrderSpec[];
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
  buyOrder?: OBOrderSpec;
  sellOrder?: OBOrderSpec;
}

export interface TradeReq {
  user?: string;
}

export interface TradeResponse {
  matches: BuyOrderMatch[];
  success: string;
  error: string;
}
