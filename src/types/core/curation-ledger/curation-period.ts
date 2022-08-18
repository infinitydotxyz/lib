import { ChainId } from '../ChainId';
import { AprByMultiplier } from './curation-block';

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
  tokenContractAddress: string;
  tokenContractChainId: ChainId;
  tokenPrice: number;
  periodAprByMultiplier: AprByMultiplier;
  avgStakePowerPerToken: number;
  periodApr: number;
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
  tokenContractAddress: string;
  tokenContractChainId: ChainId;
  periodApr: number;
  tokenPrice: number;
}

export type CurationPeriodUsers = { [userAddress: string]: CurationPeriodUser };

export interface CurationPeriod extends CurationPeriodDoc {
  users: CurationPeriodUsers;
}
