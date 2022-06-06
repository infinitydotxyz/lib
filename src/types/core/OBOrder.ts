import { BigNumberish } from '@ethersproject/bignumber';

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
  Inactive = 'inactive',
  Matched = 'matched'
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

export enum FirestoreOrderMatchMethod {
  MatchOrders = 'matchOrders',
  MatchOneToOneOrders = 'matchOneToOneOrders',
  MatchOneToManyOrders = 'matchOneToManyOrders'
}

export enum UserOrderRole {
  Maker = 'maker',
  Taker = 'taker',
  Offerer = 'offerer',
  Lister = 'lister'
}

export interface FirestoreOrderMatchBase {
  type: FirestoreOrderMatchMethod;

  /**
   * array of user addresses and user addresses with their role appended
   * i.e.
   * [
   * `0x02bf5bdd3387ffd93474252a95b16976429707cc`,
   * `0x02bf5bdd3387ffd93474252a95b16976429707cc:maker`,
   * `0x02bf5bdd3387ffd93474252a95b16976429707cc:offerer`,
   * `0x367b6cf125db1540f0da0523200781d4b3147ced`,
   * `0x367b6cf125db1540f0da0523200781d4b3147ced:taker`,
   * `0x367b6cf125db1540f0da0523200781d4b3147ced:lister`
   * ]
   */
  usersInvolved: string[];

  /**
   * the id of this order match in firestore
   */
  id: string;

  /**
   * array containing the offerId(s) and listingId(s)
   * used to support a logical OR firestore query
   */
  ids: string[];

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

  currencyAddress: string;

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

  message?: string;
}

export interface FirestoreOrderMatch extends FirestoreOrderMatchBase {
  type: FirestoreOrderMatchMethod.MatchOrders;

  matchData: {
    listingId: string;

    offerId: string;

    /**
     * the intersection of the order items in the offer and listing
     */
    orderItems: {
      [collectionAddress: string]: FirestoreOrderMatchCollection;
    };
  };
}

export interface FirestoreOrderMatchOneToOne extends FirestoreOrderMatchBase {
  type: FirestoreOrderMatchMethod.MatchOneToOneOrders;

  matchData: {
    listingId: string;

    offerId: string;
  };
}

export interface FirestoreOrderMatchOneToMany extends FirestoreOrderMatchBase {
  type: FirestoreOrderMatchMethod.MatchOneToManyOrders;

  matchData: {
    listingId: string;

    offerIds: string[];
  };
}
