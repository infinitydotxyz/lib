import { ChainId } from '../ChainId';
import { InfinityNftSale } from '../NftSale';

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
};

export interface CurationLedgerSale extends InfinityNftSale, CurationLedgerEventType {
  docId: string;
  chainId: ChainId;
  discriminator: CurationLedgerEvent.Sale;
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
