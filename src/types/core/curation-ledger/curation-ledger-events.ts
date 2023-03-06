import { FeesGeneratedDto } from '../../dto';
import { ChainId } from '../ChainId';
import { InfinityNftSale, SaleSource } from '../NftSale';
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
  tokenContractAddress: string;
  tokenContractChainId: ChainId;
  collectionChainId: ChainId;
  collectionAddress: string;
  isStakeMerged: boolean;
};

export interface CurationLedgerSale extends Omit<InfinityNftSale, 'source'>, CurationLedgerEventType {
  docId: string;
  chainId: ChainId;
  discriminator: CurationLedgerEvent.Sale;
  source: SaleSource.Infinity | 'flow';
  /**
   * no stake info to merge
   */
  isStakeMerged: true;
  feesGenerated: FeesGeneratedDto;
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

export interface CurationLedgerVotesAddedWithStake extends CurationVotesAdded {
  stake: CurationLedgerEventStake;
  isStakeMerged: true;
}

export interface CurationLedgerVotesRemovedWithStake extends CurationVotesRemoved {
  stake: CurationLedgerEventStake;
  isStakeMerged: true;
}

export type CurationLedgerEvents = CurationLedgerSale | CurationVotesAdded | CurationVotesRemoved;
export type CurationLedgerEventsWithStake =
  | CurationLedgerVotesAddedWithStake
  | CurationLedgerVotesRemovedWithStake
  | CurationLedgerSale;
