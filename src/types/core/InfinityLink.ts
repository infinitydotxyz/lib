import { ChainId } from './ChainId';

export enum InfinityLinkType {
  Asset = 'assets',
  Collection = 'collection'
}

export interface AssetLink {
  type: InfinityLinkType.Asset;
  collectionAddress: string;
  tokenId: string;
  chainId: ChainId;
}

export interface CollectionLink {
  type: InfinityLinkType.Collection;
  addressOrSlug: string;
  chainId: ChainId;
}

export type InfinityLink = AssetLink | CollectionLink;
