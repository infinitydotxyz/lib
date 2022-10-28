import { TradingFeeRefundDto } from '../../dto';
import { ChainId } from '../ChainId';
import { InfinityNftSale } from '../NftSale';
import { RewardListingEvent } from './reward-event';

export interface TransactionFeePhaseRewardsDoc {
  phaseName: string;
  phaseId: string;
  phaseIndex: number;
  userAddress: string;
  chainId: ChainId;
  rewards: number;
  volumeEth: number;
  volumeWei: string;
  volumeUSDC: number;
  updatedAt: number;
  userSells: number;
  userBuys: number;
  userListings: number;
  protocolFeesWei: string;
  protocolFeesEth: number;
  protocolFeesUSDC: number;
  config: Omit<TradingFeeRefundDto, 'rewardSupplyUsed'>;
  isCopiedToRaffles: boolean;
}

export interface AllTimeTransactionFeeRewardsDoc {
  userAddress: string;
  chainId: ChainId;
  rewards: number;
  volumeEth: number;
  volumeWei: string;
  volumeUSDC: number;
  updatedAt: number;
  userSells: number;
  userBuys: number;
  userListings: number;
  protocolFeesWei: string;
  protocolFeesEth: number;
  protocolFeesUSDC: number;
  v1Airdrop: number;
  listingReward: number;
}

export interface TransactionFeeRewardDoc {
  userAddress: string;
  chainId: ChainId;
  sale: InfinityNftSale;
  volumeWei: string;
  volumeEth: number;
  volumeUSDC: number;
  isSplit: boolean;
  phaseId: string;
  phaseName: string;
  phaseIndex: number;
  config: Omit<TradingFeeRefundDto, 'rewardSupplyUsed'>;
  isAggregated: boolean;
  reward: number;
  listingReward: number;
  protocolFeesWei: string;
  protocolFeesEth: number;
  protocolFeesUSDC: number;
}

export interface ListingRewardsDoc {
  userAddress: string;
  chainId: ChainId;
  listing: RewardListingEvent;
  listingReward: number;
  isSplit: boolean;
  phaseId: string;
  phaseName: string;
  phaseIndex: number;
  config: Omit<TradingFeeRefundDto, 'rewardSupplyUsed'>;
  isAggregated: boolean;
}

export type UserRewardsEventDoc = TransactionFeeRewardDoc | ListingRewardsDoc;
