import crypto from 'crypto';
import { BigNumber } from 'ethers';
import { formatEther } from 'ethers/lib/utils';
import { OBOrder } from './OBOrder';

// =====================================================
// used for display and stored in Firebase

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

export const getCurrentOrderSpecPrice = (order: OBOrderSpec): number => {
  const startTime = order.startTime;
  const endTime = order.endTime;
  const startPrice = order.startPrice;
  const endPrice = order.endPrice;
  const duration = endTime - startTime;
  let priceDiff = startPrice - endPrice;

  if (priceDiff === 0 || duration === 0) {
    return startPrice;
  }

  const elapsedTime = Date.now() - startTime;
  const portion = elapsedTime > duration ? 1 : elapsedTime / duration;
  priceDiff = priceDiff * portion;
  return startPrice - priceDiff;
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
    endTime: BigNumber.from(spec.endTime / 1000),
    startTime: BigNumber.from(spec.startTime / 1000),
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
