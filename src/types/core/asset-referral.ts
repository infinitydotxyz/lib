import { ChainId } from './ChainId';

export enum AssetReferralType {
  Nft = 'nft',
  Collection = 'collection'
}

export interface BaseAssetReferralDoc {
  type: AssetReferralType;
  referrer: string;
  assetAddress: string;
  assetChainId: ChainId;
  referredUser: string;
  referredAt: number;
}

export interface NftReferralDoc extends BaseAssetReferralDoc {
  type: AssetReferralType.Nft;
  assetTokenId: string;
}

export interface CollectionReferralDoc extends BaseAssetReferralDoc {
  type: AssetReferralType.Collection;
}

export type AssetReferralDoc = NftReferralDoc | CollectionReferralDoc;
