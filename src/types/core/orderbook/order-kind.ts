export type TokenKind = 'single-token' | 'token-list' | 'collection-wide';
export type CollectionKind = 'single-collection' | 'multi-collection';

export interface OrderKind {
  collectionKind: CollectionKind;

  isSubSetOrder: boolean;

  numItems: number;

  numTokens: number;
  numCollections: number;

  isDynamic: boolean;
  isPrivate: boolean;
}
