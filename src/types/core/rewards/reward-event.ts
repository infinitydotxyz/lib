import { ChainId } from '../ChainId';
import { InfinityNftSale } from '../NftSale';
import { AssetReferralDoc } from '../referrals';

export enum RewardEventVariant {
  Sale = 'SALE',
  Listing = 'LISTING'
}

export interface BaseRewardEvent {
  discriminator: RewardEventVariant;
  isSplit?: boolean;
  updatedAt: number;
  isAggregated: boolean;
  chainId: ChainId;
}

export interface RewardSaleEvent extends Omit<InfinityNftSale, 'source'>, BaseRewardEvent {
  discriminator: RewardEventVariant.Sale;
  chainId: ChainId;
  ethPrice: number;
  docId: string;
  referral?: AssetReferralDoc;
  isMerged: true;
  source: string;
}

export interface PreMergedRewardSaleEvent extends Omit<RewardSaleEvent, 'referral' | 'ethPrice' | 'isMerged'> {
  isMerged: false;
}

export interface RewardOrderItem {
  hasBlueCheck: boolean;
  collectionAddress: string;
  collectionSlug: string;
  floorPriceEth: number | null;
  tokenId: string;
  numTokens: number;
  rewardMultiplier: number;
}

export interface PreMergedRewardListingEvent extends BaseRewardEvent {
  discriminator: RewardEventVariant.Listing;
  order: {
    id: string;
    chainId: ChainId;
    isSellOrder: boolean;
    startTimeMs: number;
    endTimeMs: number;
    startPriceEth: number;
    endPriceEth: number;
    numItems: number;
    makerAddress: string;
    items: RewardOrderItem[];
  };
  stakerContractAddress: string;
  stakerContractChainId: ChainId;
  blockNumber: number;
  isMerged: false;
}

export interface RewardListingEvent extends Omit<PreMergedRewardListingEvent, 'isMerged'> {
  isMerged: true;
  stakeLevel: number;
}

export type PreMergedRewardEvent = PreMergedRewardListingEvent | PreMergedRewardSaleEvent;
export type RewardEvent = RewardSaleEvent | RewardListingEvent;
