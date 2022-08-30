import { ChainId } from '../ChainId';

export enum RewardType {
  ERC20 = 'ERC20',
  ERC721 = 'ERC721',
  ETH = 'ETH'
}

export enum RewardProgram {
  NftReward = 'NFT_REWARD',
  Curation = 'CURATION',
  TradingFee = 'TRADING_FEE'
}

export enum Epoch {
  One = 'Epoch 1',
  Two = 'Epoch 2',
  Three = 'Epoch 3'
}

export enum Phase {
  One = 'Phase 1',
  Two = 'Phase 2',
  Three = 'Phase 3',
  Four = 'Phase 4',
  Five = 'Phase 5',
  Six = 'Phase 6'
}

export interface TradingReward {
  maxReward: number;

  rewardRateNumerator: number;
  rewardRateDenominator: number;

  rewardType: RewardType;

  rewardSupply: number;
  rewardSupplyUsed: number;

  buyerPortion: number;
  sellerPortion: number;
}

export interface RewardPhase {
  name: Phase;
  epoch: Epoch;
  isActive: boolean;
  [RewardProgram.TradingFee]: TradingReward | null;
  [RewardProgram.NftReward]: TradingReward | null;
  [RewardProgram.Curation]: boolean;
}

export interface RewardEpoch {
  name: string;

  startsAt: number;

  isActive: boolean;

  phases: RewardPhase[];
}

export interface RewardsProgram {
  chainId: ChainId;
  epochs: RewardEpoch[];
}
