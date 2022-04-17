import crypto from 'crypto';
import { BigNumber, BigNumberish, BytesLike } from 'ethers';
import { formatEther } from 'ethers/lib/utils';
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

export interface OBOrderSpec {
  id: string;
  chainId: number;
  isSellOrder: boolean;
  signerAddress: string;
  numItems: number;

  // in Eth
  startPrice: number;
  endPrice: number;

  // milliseconds
  startTime: number;
  endTime: number;
  nfts: OBOrderSpecNFT[];
}

export const orderSpecHash = (obj: OBOrderSpec): string => {
  const copy = JSON.parse(JSON.stringify(obj));

  // we don't want the id part of the hash
  copy.id = undefined;

  // we don't want the currentPrice part of the hash
  // this is set on ActiveSellOrder
  copy.currentPrice = undefined;

  // added to to sell orders to help queries
  copy.collectionAddresses = undefined;

  let data = '';

  // JSON.stringify can have different results depending on order of keys
  // sort keys first
  const keys = Object.keys(copy).sort();
  for (const key of keys) {
    if (key === 'nfts') {
      const collectionAddresses = [];
      const ids = [];

      for (const item of obj.nfts) {
        collectionAddresses.push(item.collectionAddress);
        ids.push(...item.tokens);
      }

      collectionAddresses.sort();
      ids.sort((a, b) => {
        return a.tokenId - b.tokenId;
      });

      data += `cols: ${collectionAddresses.toString()}`;
      data += `ids: ${ids.toString()}`;
    } else {
      const val = copy[key];
      if (val) {
        data += `${key}: ${val.toString()}`;
      }
    }
  }

  return crypto.createHash('sha256').update(data).digest('hex').trim().toLowerCase();
};

export const getCurrentOrderSpecPrice = (order: OBOrderSpec): BigNumber => {
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

export const isOrderSpecEqual = (a: OBOrderSpec, b: OBOrderSpec): boolean => {
  // use ids if set, id is hash
  if (a.id && b.id) {
    return a.id === b.id;
  }

  return orderSpecHash(a) === orderSpecHash(b);
};

export const isOrderSpecExpired = (order: OBOrderSpec): boolean => {
  // special case of never expire
  if (order.endTime === 0) {
    return false;
  }

  return order.endTime < Date.now();
};

export const specToOBOrder = (spec: OBOrderSpec): OBOrder => {
  const result: OBOrder = {
    chainId: BigNumber.from(spec.chainId),
    endPrice: BigNumber.from(formatEther(spec.endPrice)),
    startPrice: BigNumber.from(formatEther(spec.startPrice)),
    endTime: BigNumber.from(Math.floor(spec.endTime / 1000)),
    startTime: BigNumber.from(Math.floor(spec.startTime / 1000)),
    isSellOrder: spec.isSellOrder,
    numItems: spec.numItems,
    execParams: { complicationAddress: '', currencyAddress: '' },
    extraParams: {},
    id: '',
    minBpsToSeller: BigNumber.from(0),
    nfts: [],
    nonce: BigNumber.from(0),
    signerAddress: ''
  };
  return result;
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
