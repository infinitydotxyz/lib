import { RewardPhaseDto, TradingRewardDto } from '../../dto/rewards';
import { ChainId } from '../ChainId';
import { InfinityNftSale } from '../NftSale';
import { Epoch, Phase } from './reward-program';

export interface TransactionFeePhaseRewardsDoc {
  userAddress: string;
  epoch: Epoch;
  chainId: ChainId;
  phase: Phase;
  tradingFeeRewards: Omit<TradingRewardDto, 'rewardSupplyUsed'> | null;
  nftRewards: Omit<TradingRewardDto, 'rewardSupplyUsed'> | null;
  rewards: number;
  volume: number;
  updatedAt: number;
  userSells: number;
  userBuys: number;
}

export interface AllTimeTransactionFeeRewardsDoc {
  userAddress: string;
  chainId: ChainId;
  rewards: number;
  volume: number;
  updatedAt: number;
  userSells: number;
  userBuys: number;
}

export interface TransactionFeeRewardDoc {
  userAddress: string;
  chainId: ChainId;
  sale: InfinityNftSale;
  volumeWei: string;
  volumeEth: number;
  isSplit: boolean;
  phase: RewardPhaseDto;
  isAggregated: boolean;
  reward: number;
}
