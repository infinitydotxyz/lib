import { ChainId } from '../ChainId';

export enum AssetReferralVariant {
  Nft = 'nft',
  Collection = 'collection'
}

export interface BaseAssetReferralDoc {
  discriminator: AssetReferralVariant;
  referrer: string;
  assetAddress: string;
  assetChainId: ChainId;
  referredUser: string;
  referredAt: number;
}

export interface NftReferralDoc extends BaseAssetReferralDoc {
  discriminator: AssetReferralVariant.Nft;
  assetTokenId: string;
}

export interface CollectionReferralDoc extends BaseAssetReferralDoc {
  discriminator: AssetReferralVariant.Collection;
}

export type AssetReferralDoc = NftReferralDoc | CollectionReferralDoc;
