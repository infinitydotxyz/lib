import { ChainId } from '../ChainId';

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
  stakerContractAddress: string;
  stakerContractChainId: ChainId;
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
  stakerContractAddress: string;
  stakerContractChainId: ChainId;
}

export type CurationPeriodUsers = { [userAddress: string]: CurationPeriodUser };

export interface CurationPeriod extends CurationPeriodDoc {
  users: CurationPeriodUsers;
}
