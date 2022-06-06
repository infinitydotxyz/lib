import { ChainId } from './ChainId';

export enum FirestoreOrderMatchStatus {
  Active = 'active',
  Inactive = 'inactive',
  Matched = 'matched',
  Error = 'error'
}

export enum FirestoreOrderMatchErrorCode {
  /**
   * order cancelled or expired
   */
  OrderNoLongerValid = 0,

  /**
   * lister failed to approve contract to transfer NFT
   */
  NotApprovedToTransferToken = 1,

  /**
   * buyer failed to approve contract to spend ERC20
   */
  NotApprovedToSpendCurrency = 2,

  /**
   * buyer does not have enough of the ERC20
   * quantity to pay for order
   */
  InsufficientCurrencyBalance = 3,

  /**
   * lister does not have enough of the NFT
   * quantity to transfer to buyer
   */
  InsufficientTokenBalance = 4,

  /**
   * unknown error occurred
   */
  UnknownError = 100
}

interface OrderMatchStateBase {
  status: FirestoreOrderMatchStatus;

  /**
   * price of the order at the time it becomes valid
   */
  priceValid: number;

  /**
   * timestamp that the orders become a valid
   * match
   */
  timestampValid: number;
}

export interface OrderMatchStatePending extends OrderMatchStateBase {
  status: FirestoreOrderMatchStatus.Active | FirestoreOrderMatchStatus.Inactive;
}

export interface OrderMatchStateSuccess extends OrderMatchStateBase {
  status: FirestoreOrderMatchStatus.Matched;

  txHash: string;

  price: number;
}

export interface OrderMatchStateError extends OrderMatchStateBase {
  status: FirestoreOrderMatchStatus.Error;

  code: FirestoreOrderMatchErrorCode;

  error: string;
}

export type OrderMatchState = OrderMatchStatePending | OrderMatchStateSuccess | OrderMatchStateError;

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
   * collection addresses in the match
   */
  collectionAddresses: string[];

  chainId: ChainId;

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

  state: OrderMatchState;
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

    orderItems: {
      [collectionAddress: string]: FirestoreOrderMatchCollection;
    };
  };
}

export interface FirestoreOrderMatchOneToMany extends FirestoreOrderMatchBase {
  type: FirestoreOrderMatchMethod.MatchOneToManyOrders;

  matchData: {
    listingIds: string[];

    offerIds: string[];

    orderItems: {
      [collectionAddress: string]: FirestoreOrderMatchCollection;
    };
  };
}
