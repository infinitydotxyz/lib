import { ChainId } from '../ChainId';

export enum DistributionType {
  ETH = 'ETH',
  INFT = 'INFT',
  FLOW = 'FLOW',
  FLUR = 'FLUR',
  XFL = 'XFL',
  PIXL = 'PIXL'
}

export enum ETHDistributionSources {
  Curation = 'CURATION',
  Referrals = 'REFERRALS',
  Staking = 'STAKING'
}

export enum INFTDistributionSources {
  TradingFeeRefund = 'TRADING_FEE_REFUND',
  V1Airdrop = 'V1_AIRDROP'
}

export enum FLOWDistributionSources {
  TradingReward = 'TRADING_REWARD',
  Airdrop = 'AIRDROP',
  LPReward = 'LP_REWARD'
}

export enum FLURDistributionSources {
  Airdrop = 'AIRDROP',
  LPReward = 'LP_REWARD'
}

export enum XFLDistributionSources {
  Airdrop = 'AIRDROP'
}

export enum PIXLDistributionSources {
  Airdrop = 'AIRDROP',
  Referrals = 'REFERRALS',
  Listings = 'LISTINGS',
  Buys = 'BUYS',
  Bids = 'BIDS'
}

export const distributionSourcesByType = {
  [DistributionType.ETH]: ETHDistributionSources,
  [DistributionType.INFT]: INFTDistributionSources,
  [DistributionType.FLOW]: FLOWDistributionSources,
  [DistributionType.FLUR]: FLURDistributionSources,
  [DistributionType.XFL]: XFLDistributionSources,
  [DistributionType.PIXL]: PIXLDistributionSources
};

export type DistributionSourcesByType = {
  [DistributionType.ETH]: ETHDistributionSources;
  [DistributionType.INFT]: INFTDistributionSources;
  [DistributionType.FLOW]: FLOWDistributionSources;
  [DistributionType.FLUR]: FLURDistributionSources;
  [DistributionType.XFL]: XFLDistributionSources;
  [DistributionType.PIXL]: PIXLDistributionSources;
};

export interface ETHDistribution {
  type: DistributionType.ETH;
  chainId: ChainId;
  stakingContractAddress: string;
  tokenContractAddress: string;
  airdropContractAddress: string;
  maxTimestamp: number;
}

export interface INFTDistribution {
  type: DistributionType.INFT;
  chainId: ChainId;
  tokenContractAddress: string;
  airdropContractAddress: string;
  phaseIds: string[];
}

export interface FLOWDistribution {
  type: DistributionType.FLOW;
  chainId: ChainId;
  stakingContractAddress: string;
  tokenContractAddress: string;
  airdropContractAddress: string;
  maxTimestamp?: number;
}

export interface FLURDistribution {
  type: DistributionType.FLUR;
  chainId: ChainId;
  tokenContractAddress: string;
  airdropContractAddress: string;
  maxTimestamp?: number;
}

export interface XFLDistribution {
  type: DistributionType.XFL;
  chainId: ChainId;
  tokenContractAddress: string;
  airdropContractAddress: string;
  maxTimestamp?: number;
}

export interface PIXLDistribution {
  type: DistributionType.PIXL;
  chainId: ChainId;
  tokenContractAddress: string;
  airdropContractAddress: string;
  maxTimestamp?: number;
}

export type DistributionConfig =
  | ETHDistribution
  | INFTDistribution
  | FLOWDistribution
  | FLURDistribution
  | XFLDistribution
  | PIXLDistribution;

export interface MerkleRootDoc<T extends DistributionType> {
  config: DistributionConfig;
  updatedAt: number;
  nonce: number;
  numEntries: number;
  root: string;
  totalCumulativeAmount: string;
  sourceAmounts: Record<DistributionSourcesByType[T], string>;
}

export interface MerkleRootLeafDoc<T extends DistributionType> {
  nonce: number;
  address: string;
  cumulativeAmount: string;
  expectedMerkleRoot: string;
  proof: string[];
  leaf: string;
  updatedAt: number;
  sourceAmounts: Record<DistributionSourcesByType[T], string>;
}
