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
  orderStatus: OBOrderStatus;
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
  currencyAddress: string;
  orderStatus: OBOrderStatus;
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
  orderBy?: 'startPriceEth' | 'startTimeMs' | 'endTimeMs';
  orderByDirection?: 'asc' | 'desc';
}

export interface GetMinBpsQuery {
  chainId?: string;
  collections?: string[];
}

export enum FirestoreOrderMatchStatus {
  Active = 'active',
  Inactive = 'inactive'
}

export type FirestoreOrderMatchCollection = {
  collectionAddress: string;
  collectionName: string;
  collectionImage: string;
  collectionSlug: string;
  hasBlueCheck: boolean;
  tokens: { [tokenId: string]: FirestoreOrderMatchToken };
};

export type FirestoreOrderMatchToken = {
  tokenId: string;
  tokenName: string;
  tokenImage: string;
  tokenSlug: string;
  numTokens: number;
};

export interface FirestoreOrderMatch {
  /**
   * the id of this order match in firestore
   */
  id: string;

  /**
   * array containing the offerId and listingId
   * used to support a logical OR firestore query
   */
  ids: string[];

  /**
   * address of the user that created the listing in the match
   */
  listerAddress: string;

  /**
   * address of the user that created the offer in the match
   */
  offererAddress: string;

  /**
   * price that the order will be executed at
   */
  price: number;

  /**
   * collection addresses in the match
   */
  collectionAddresses: string[];

  chainId: string;

  /**
   * array of `collectionAddress:tokenId` formatted strings
   * used to search for specific tokens in order matches
   */
  tokens: string[];

  /**
   * timestamp that the match was created
   */
  createdAt: number;

  /**
   * timestamp that the orders become valid
   * matches
   */
  timestamp: number;

  status: FirestoreOrderMatchStatus;

  currencyAddress: string;

  collections: {
    [collectionAddress: string]: FirestoreOrderMatchCollection;
  };
}
