import { ChainId } from '../ChainId';
import { ProtocolFeeStats } from '../Stats';

export interface CurationPeriod {
  startTimestamp: number;
  endTimestamp: number;
  hasUnaggregatedEvents: boolean;
  updatedAt: number;
  isAggregated: boolean;
  numCurators: number;
  numCuratorVotes: number;
  protocolFees: ProtocolFeeStats;
}

export interface CurationPeriodDoc {
  collectionAddress: string;
  chainId: ChainId;
  timestamp: number;
  /**
   * total fees accrued over all previous periods
   */
  totalProtocolFeesAccruedWei: string;

  /**
   * fees accrued during this period
   */
  periodProtocolFeesAccruedWei: string;

  totalProtocolFeesAccruedEth: number;
  periodProtocolFeesAccruedEth: number;
}

export interface CurationPeriodUser {
  userAddress: string;
  chainId: ChainId;
  collectionAddress: string;
  totalProtocolFeesAccruedWei: string;
  periodProtocolFeesAccruedWei: string;
  totalProtocolFeesAccruedEth: number;
  periodProtocolFeesAccruedEth: number;
  updatedAt: number;
}

export type CurationPeriodUsers = { [userAddress: string]: CurationPeriodUser };

export interface CurationPeriod extends CurationPeriodDoc {
  users: CurationPeriodUsers;
}
