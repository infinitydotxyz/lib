import { CollectionDisplayData, CurationLedgerEventStake, StakeDuration } from '..';
import { ChainId } from '../ChainId';
import { UserDisplayData } from '../UserDisplayData';

export type AprByMultiplier = Record<StakeDuration, number>;

export interface CurationBlockMetadata {
  collectionAddress: string;
  collectionChainId: ChainId;
  stakerContractAddress: string;
  stakerContractChainId: ChainId;
  tokenContractAddress: string;
  tokenContractChainId: ChainId;
  timestamp: number;
  blockDuration: number;
  /**
   * first eth block number of the block
   */
  blockNumber: number;
  isAggregated: boolean;
}

export interface CurationBlockStats {
  numCurators: number;
  numCuratorVotes: number;
  numCuratorsAdded: number;
  numCuratorsRemoved: number;
  numCuratorVotesAdded: number;
  numCuratorVotesRemoved: number;
  numCuratorsPercentChange: number;
  numCuratorVotesPercentChange: number;
  /**
   * total fees accrued over all previous blocks
   * and this block
   */
  totalProtocolFeesAccruedWei: string;
  /**
   * fees accrued during this block
   */
  blockProtocolFeesAccruedWei: string;

  /**
   * arbitrage fees that are left over from previous blocks
   */
  arbitrageProtocolFeesAccruedWei: string;

  totalProtocolFeesAccruedEth: number;
  blockProtocolFeesAccruedEth: number;
  arbitrageProtocolFeesAccruedEth: number;

  blockPayoutWei: string;
  blockPayoutEth: number;

  tokenPrice: number;
  blockAprByMultiplier: AprByMultiplier;
  avgStakePowerPerToken: number;
  blockApr: number;
}

export interface CurationBlockRewardsDoc {
  collection: CollectionDisplayData;
  metadata: CurationBlockMetadata;
  stats: CurationBlockStats;
}

export type CurationBlockUserMetadata = Omit<CurationBlockMetadata, 'isAggregated'> & {
  userAddress: string;
  updatedAt: number;
};

export interface CurationBlockUserStats {
  votes: number;
  firstVotedAt: number;
  lastVotedAt: number;

  totalProtocolFeesAccruedWei: string;
  blockProtocolFeesAccruedWei: string;
  totalProtocolFeesAccruedEth: number;
  blockProtocolFeesAccruedEth: number;
  /**
   * The percentage of votes this user has over the total collection curators
   */
  curatorShare: number;
  /**
   * The total number of curators in the collection
   */
  numCurators: number;
  /**
   * The total number of votes in the collection
   */
  numCuratorVotes: number;

  /**
   * block token price relative to ETH
   */
  tokenPrice: number;

  blockApr: number;
  /**
   * stake used for calculating apr for this user
   */
  stake: CurationLedgerEventStake;
}

export interface CurationBlockUser {
  collection: CollectionDisplayData;
  user: UserDisplayData;
  metadata: CurationBlockUserMetadata;
  stats: CurationBlockUserStats;
}

export type CurationBlockUsers = { [userAddress: string]: CurationBlockUser };

export interface CurationBlockRewards extends CurationBlockRewardsDoc {
  users: CurationBlockUsers;
}
