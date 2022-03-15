export enum InfinityLinkType {
    Asset = 'assets',
    Collection = 'collection'
}

export interface AssetLink {
    type: InfinityLinkType.Asset,
    collectionAddress: string;
    tokenId: string;
}

export interface CollectionLink {
    type: InfinityLinkType.Collection,
    addressOrSlug: string;
}

export type InfinityLink = AssetLink | CollectionLink;
