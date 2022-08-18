import { ChainId } from '../ChainId';
import { InfinityNftSale } from '../NftSale';
import { StakeInfo } from '../StakerEvents';

export enum CurationLedgerEvent {
  Sale = 'sale',
  VotesAdded = 'votesAdded',
  VotesRemoved = 'votesRemoved'
}

export type CurationLedgerEventType = {
  discriminator: CurationLedgerEvent;
  blockNumber: number;
  timestamp: number;
  updatedAt: number;
  isAggregated: boolean;
  isDeleted: boolean;
  stakerContractAddress: string;
  stakerContractChainId: ChainId;
  collectionChainId: ChainId;
  collectionAddress: string;
  isStakeMerged: boolean;
};

export interface CurationLedgerSale extends InfinityNftSale, CurationLedgerEventType {
  docId: string;
  chainId: ChainId;
  discriminator: CurationLedgerEvent.Sale;
  /**
   * no stake info to merge
   */
  isStakeMerged: true;
}

export interface CurationVotesAdded extends CurationLedgerEventType {
  votes: number;
  userAddress: string;
  discriminator: CurationLedgerEvent.VotesAdded;
  isFeedUpdated: boolean;
}

export interface CurationVotesRemoved extends CurationLedgerEventType {
  votes: number;
  userAddress: string;
  txHash: string;
  discriminator: CurationLedgerEvent.VotesRemoved;
  isFeedUpdated: boolean;
}

export interface CurationLedgerEventStake {
  stakeInfo: StakeInfo;
  stakePower: number;
  stakePowerPerToken: number;
  stakerEventTxHash: string;
  stakerEventBlockNumber: number;
}

export interface CurationLedgerVotesAddedWithStake extends CurationLedgerSale {
  stake: CurationLedgerEventStake;
  isStakeMerged: true;
}

export interface CurationLedgerVotesRemovedWithStake extends CurationLedgerSale {
  stake: CurationLedgerEventStake;
  isStakeMerged: true;
}

export type CurationLedgerEvents = CurationLedgerSale | CurationVotesAdded | CurationVotesRemoved;
export type CurationLedgerEventsWithStake =
  | CurationLedgerVotesAddedWithStake
  | CurationLedgerVotesRemovedWithStake
  | CurationLedgerSale;
