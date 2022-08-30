import { ChainId } from '../ChainId';
import { InfinityNftSale } from '../NftSale';
import { Epoch, Phase, RewardPhase, TradingReward } from './reward-program';

export interface TransactionFeePhaseRewardsDoc {
  epoch: Epoch;
  chainId: ChainId;
  phase: Phase;
  tradingFeeRewards: Omit<TradingReward, 'rewardSupplyUsed'> | null;
  nftRewards: Omit<TradingReward, 'rewardSupplyUsed'> | null;
  rewards: number;
  volume: number;
  updatedAt: number;
}

export interface AllTimeTransactionFeeRewardsDoc {
  chainId: ChainId;
  rewards: number;
  volume: number;
  updatedAt: number;
}

export interface TransactionFeeReward {
  userAddress: string;
  chainId: ChainId;
  sale: InfinityNftSale;
  volumeWei: string;
  volumeEth: number;
  isSplit: boolean;
  phase: RewardPhase;
  isAggregated: boolean;
  reward: number;
}
