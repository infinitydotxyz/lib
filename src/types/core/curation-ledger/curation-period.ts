import { ChainId } from '../ChainId';
import { CollectionDisplayData } from '../CollectionDisplayData';
import { UserDisplayData } from '../UserDisplayData';
import { AprByMultiplier } from './curation-block';

export interface CurationPeriodStats {
  tokenPrice: number;
  periodAprByMultiplier: AprByMultiplier;
  avgStakePowerPerToken: number;
  periodApr: number;
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

export interface CurationPeriodMetadata {
  collectionAddress: string;
  collectionChainId: ChainId;
  stakerContractAddress: string;
  stakerContractChainId: ChainId;
  tokenContractAddress: string;
  tokenContractChainId: ChainId;
  timestamp: number;
  periodDuration: number;
}

export interface CurationPeriodDoc {
  collection: CollectionDisplayData;
  metadata: CurationPeriodMetadata;
  stats: CurationPeriodStats;
}

export interface CurationPeriodUserStats {
  totalProtocolFeesAccruedWei: string;
  periodProtocolFeesAccruedWei: string;
  totalProtocolFeesAccruedEth: number;
  periodProtocolFeesAccruedEth: number;
  periodApr: number;
  tokenPrice: number;
}

export type CurationPeriodUserMetadata = CurationPeriodMetadata & {
  userAddress: string;
  updatedAt: number;
};

export interface CurationPeriodUser {
  metadata: CurationPeriodUserMetadata;
  user: UserDisplayData;
  collection: CollectionDisplayData;
  stats: CurationPeriodUserStats;
}

export type CurationPeriodUsers = { [userAddress: string]: CurationPeriodUser };

export interface CurationPeriod extends CurationPeriodDoc {
  users: CurationPeriodUsers;
}
