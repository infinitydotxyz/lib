import { ChainId } from '../ChainId';
import { CollectionDisplayData } from '../CollectionDisplayData';
import { TokenStandard } from '../Token';
import { UserDisplayData } from '../UserDisplayData';
import { CollectionKind, TokenKind } from './order-kind';
import { OrderSource } from './order-source';
import { QueryableOrder } from './queryable-order';
import { OrderError } from './raw-order';

export interface BaseFirestoreOrderItem {
  chainId: ChainId;
  address: string;
  hasBlueCheck: boolean;
  slug: string;
  name: string;
  profileImage: string;
  bannerImage: string;
  tokenStandard: TokenStandard;
  kind: TokenKind;
}

export interface OrderItemToken {
  tokenId: string;
  name: string;
  numTraitTypes: number;
  image: string;
  tokenStandard: TokenStandard;
  quantity: number;
  owner: UserDisplayData;
}
export interface SingleTokenOrderItem extends BaseFirestoreOrderItem {
  kind: 'single-token';
  token: OrderItemToken;
}

export interface TokenListOrderItem extends BaseFirestoreOrderItem {
  kind: 'token-list';
  tokens: OrderItemToken[];
}

export interface CollectionWideOrderItem extends BaseFirestoreOrderItem {
  kind: 'collection-wide';
}

export type OrderItem = CollectionWideOrderItem | SingleTokenOrderItem | TokenListOrderItem;
export interface FirestoreOrderCollection {
  collection: CollectionDisplayData;
  tokens: {
    hasBlueCheck: boolean;
    tokenId: string;
    name: string;
    numTraitTypes: number;
    image: string;
    tokenStandard: TokenStandard;
    numTokens: number;
  }[];
}

export interface BaseDisplayOrder {
  kind: CollectionKind;

  maker: UserDisplayData;

  taker?: UserDisplayData;
}

export interface SingleCollectionDisplayOrder extends BaseDisplayOrder {
  kind: 'single-collection';
  item: OrderItem;
}

export interface MultiCollectionDisplayOrder extends BaseDisplayOrder {
  kind: 'multi-collection';
  items: OrderItem[];
}

export type DisplayOrder = SingleCollectionDisplayOrder | MultiCollectionDisplayOrder;

export interface BaseFirestoreDisplayOrder {
  metadata: {
    id: string;
    chainId: ChainId;
    source: OrderSource;
    updatedAt: number;
    createdAt: number;
    hasError: boolean;
    processed: boolean;
  };
  error?: OrderError;

  order?: QueryableOrder;

  displayOrder?: DisplayOrder;
}

export interface FirestoreDisplayOrderWithError extends BaseFirestoreDisplayOrder {
  metadata: {
    id: string;
    chainId: ChainId;
    source: OrderSource;
    updatedAt: number;
    createdAt: number;
    hasError: true;
    processed: boolean;
  };
  error: OrderError;
}

export interface FirestoreDisplayOrderWithoutError extends BaseFirestoreDisplayOrder {
  metadata: {
    id: string;
    chainId: ChainId;
    source: OrderSource;
    updatedAt: number;
    createdAt: number;
    hasError: false;
    processed: boolean;
  };
  order: QueryableOrder;
  displayOrder: DisplayOrder;
}

export type FirestoreDisplayOrder = FirestoreDisplayOrderWithError | FirestoreDisplayOrderWithoutError;
