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
  volumeEth: number;
  volumeWei: string;
  volumeUSDC: number;
  updatedAt: number;
  userSells: number;
  userBuys: number;
  protocolFeesWei: string;
  protocolFeesEth: number;
  protocolFeesUSDC: number;
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
  protocolFeesWei: string;
  protocolFeesEth: number;
  protocolFeesUSDC: number;
}

export interface TransactionFeeRewardDoc {
  userAddress: string;
  chainId: ChainId;
  sale: InfinityNftSale;
  volumeWei: string;
  volumeEth: number;
  volumeUSDC: number;
  isSplit: boolean;
  phase: RewardPhaseDto;
  isAggregated: boolean;
  reward: number;
  protocolFeesWei: string;
  protocolFeesEth: number;
  protocolFeesUSDC: number;
}
