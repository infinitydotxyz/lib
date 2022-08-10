import { ChainId } from '../ChainId';

export interface CurationBlockUser {
  userAddress: string;
  votes: number;
  chainId: ChainId;
  collectionAddress: string;
  totalProtocolFeesAccruedWei: string;
  blockProtocolFeesAccruedWei: string;
  totalProtocolFeesAccruedEth: number;
  blockProtocolFeesAccruedEth: number;
  firstVotedAt: number;
  lastVotedAt: number;
  updatedAt: number;

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
}

export type CurationBlockUsers = { [userAddress: string]: CurationBlockUser };

export interface CurationBlockRewardsDoc {
  collectionAddress: string;
  chainId: ChainId;

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

  /**
   * start timestamp of the block
   */
  timestamp: number;
  isAggregated: boolean;
}

export interface CurationBlockRewards extends CurationBlockRewardsDoc {
  users: CurationBlockUsers;
}
