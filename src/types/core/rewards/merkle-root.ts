import { ChainId } from '../ChainId';

export enum AirdropType {
  Curation = 'curation',
  TxFees = 'txFees'
}

export interface CurationAirdrop {
  type: AirdropType.Curation;
  chainId: ChainId;
  stakingContractAddress: string;
  tokenContractAddress: string;
  airdropContractAddress: string;
  maxTimestamp: number;
}

export interface TxFeesAirdrop {
  type: AirdropType.TxFees;
  chainId: ChainId;
  tokenContractAddress: string;
  airdropContractAddress: string;
  phaseIds: string[];
}

export type AirdropConfig = CurationAirdrop | TxFeesAirdrop;

export interface MerkleRootDoc {
  config: AirdropConfig;
  updatedAt: number;
  nonce: number;
  numEntries: number;
  root: string;
  totalCumulativeAmount: string;
}

export interface MerkleRootLeafDoc {
  nonce: number;
  address: string;
  cumulativeAmount: string;
  expectedMerkleRoot: string;
  proof: string[];
  leaf: string;
  updatedAt: number;
}
