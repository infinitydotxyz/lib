import { BigNumberish } from '@ethersproject/bignumber';
import { ChainId } from './ChainId';
import { Erc721Attribute } from './Metadata';
import { OrderSource } from '../../../frontend/dist/types/core';

export interface OBTokenInfo {
  tokenId: string;
  tokenName: string;
  tokenImage: string;
  takerUsername: string;
  takerAddress: string;
  numTokens: number;
  attributes: Erc721Attribute[];
}

export interface OBOrderItem {
  chainId: ChainId;
  collectionAddress: string;
  collectionName: string;
  collectionImage: string;
  collectionSlug: string;
  hasBlueCheck: boolean;
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
  maxGasPriceWei: string;
  nonce: number;
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
  extraParams: string;
  sig: string;
}

export type MakerOrder = ChainOBOrder;

export type TakerOrder = Pick<MakerOrder, 'isSellOrder' | 'nfts'>;

// signed order reqd for order execution
export interface SignedOBOrder extends OBOrder {
  signedOrder: ChainOBOrder;
}

export interface FirestoreOrder {
  id: string;
  orderStatus: OBOrderStatus;
  chainId: string;
  isSellOrder: boolean;
  numItems: number;
  startPriceEth: number;
  endPriceEth: number;
  startTimeMs: number;
  endTimeMs: number;
  maxGasPriceWei: string;
  nonce: number;
  complicationAddress: string;
  currencyAddress: string;
  makerUsername: string;
  makerAddress: string;
  signedOrder: ChainOBOrder;
  enqueued?: boolean;
  lastScannedAt?: number;
}

export interface FirestoreOrderItem {
  id: string;
  currencyAddress: string;
  orderStatus: OBOrderStatus;
  chainId: string;
  source: OrderSource;
  gasUsage: string;
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
  collectionAddress: string;
  collectionName: string;
  collectionImage: string;
  collectionSlug: string;
  hasBlueCheck: boolean;
  tokenId: string;
  tokenName: string;
  tokenImage: string;
  tokenSlug: string;
  numTokens: number;
  complicationAddress: string;
  attributes: Erc721Attribute[];
}

export enum OBOrderStatus {
  ValidActive = 'validActive',
  ValidInactive = 'validInactive',
  Invalid = 'invalid'
}

export interface GetOrderItemsQuery {
  chainId?: string;
  isSellOrder?: boolean;
  orderStatus?: OBOrderStatus;
  minPrice?: number;
  maxPrice?: number;
  numItems?: number;
  collections?: string[];
  cursor?: string;
  limit?: number;
  orderBy?: 'startPriceEth' | 'startTimeMs' | 'endTimeMs' | 'collectionSlug';
  orderByDirection?: 'asc' | 'desc';
}
