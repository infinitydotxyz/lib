import { ChainId } from '../ChainId';

export enum DistributionType {
  ETH = 'ETH',
  INFT = 'INFT'
}

export enum EthDistributionSources {
  Curation = 'CURATION',
  Referrals = 'REFERRALS'
}

export interface ETHDistribution {
  type: DistributionType.ETH;
  chainId: ChainId;
  stakingContractAddress: string;
  tokenContractAddress: string;
  airdropContractAddress: string;
  maxTimestamp: number;
}

export enum INFTDistributionSources {
  TradingFeeRefund = 'TRADING_FEE_REFUND'
}

export const distributionSourcesByType = {
  [DistributionType.ETH]: EthDistributionSources,
  [DistributionType.INFT]: INFTDistributionSources
};

export interface INFTDistribution {
  type: DistributionType.INFT;
  chainId: ChainId;
  tokenContractAddress: string;
  airdropContractAddress: string;
  phaseIds: string[];
}

export type DistributionConfig = ETHDistribution | INFTDistribution;

export interface MerkleRootDoc<T extends string> {
  config: DistributionConfig;
  updatedAt: number;
  nonce: number;
  numEntries: number;
  root: string;
  totalCumulativeAmount: string;
  sourceAmounts: Record<T, string>;
}

export interface MerkleRootLeafDoc<T extends string> {
  nonce: number;
  address: string;
  cumulativeAmount: string;
  expectedMerkleRoot: string;
  proof: string[];
  leaf: string;
  updatedAt: number;
  sourcesAmounts: Record<T, string>;
}
