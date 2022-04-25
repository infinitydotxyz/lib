import { BigNumberish } from '@ethersproject/bignumber';
import { BytesLike } from '@ethersproject/bytes';

export interface OBTokenInfo {
  tokenId: string;
  tokenName: string;
  tokenImage: string;
  takerUsername: string;
  takerAddress: string;
  numTokens: number;
}

export interface OBOrderItem {
  collectionAddress: string;
  collectionName: string;
  collectionImage: string;
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
  numItems: number;
  makerUsername: string;
  makerAddress: string;
  startPriceEth: number;
  endPriceEth: number;
  startTimeMs: number;
  endTimeMs: number;
  minBpsToSeller: number;
  nonce: string;
  nfts: OBOrderItem[];
  execParams: ExecParams;
  extraParams: ExtraParams;
}

export interface ChainNFTs {
  collection: string;
  tokens: { tokenId: string; numTokens: number }[];
}

export interface ChainOBOrder {
  isSellOrder: boolean;
  signer: string;
  constraints: BigNumberish[];
  nfts: ChainNFTs[];
  execParams: string[];
  extraParams: BytesLike;
  sig: BytesLike;
}

// signed order reqd for order execution
export interface SignedOBOrder extends OBOrder {
  signedOrder: ChainOBOrder;
}

export interface FirestoreOrder {
  id: string;
  orderStatus: string;
  chainId: string;
  isSellOrder: boolean;
  numItems: number;
  startPriceEth: number;
  endPriceEth: number;
  startTimeMs: number;
  endTimeMs: number;
  minBpsToSeller: number;
  nonce: string;
  complicationAddress: string;
  currencyAddress: string;
  makerUsername: string;
  makerAddress: string;
  signedOrder: ChainOBOrder;
}

export interface FirestoreOrderItem {
  id: string;
  orderStatus: string;
  chainId: string;
  isSellOrder: boolean;
  numItems: number;
  startPriceEth: number;
  endPriceEth: number;
  startTimeMs: number;
  endTimeMs: number;
  makerUsername: string;
  makerAddress: string;
  takerUsername: string;
  takerAddress: string;
  collection: string;
  collectionName: string;
  collectionImage: string;
  tokenId: string;
  tokenName: string;
  tokenImage: string;
  numTokens: number;
}

export enum OBOrderStatus {
  ValidActive = 'validActive',
  ValidInactive = 'validInactive',
  Invalid = 'invalid'
}

export interface GetOrderItemsQuery {
  chainId?: string;
  isSellOrder?: boolean;
  orderStatus?: string;
  minPrice?: number;
  maxPrice?: number;
  numItems?: number;
  collections?: string[];
  cursor?: string;
  limit?: number;
  orderBy?: 'startPriceEth' | 'startTimeMs' | 'endTimeMs';
  orderByDirection?: 'asc' | 'desc';
}
