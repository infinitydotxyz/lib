import { ChainId } from '../ChainId';
import { CollectionDisplayData } from '../CollectionDisplayData';
import { UserDisplayData } from '../UserDisplayData';
import { AprByMultiplier } from './curation-block';

export interface CurationPeriodStats {
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

  arbitrageProtocolFeesAccruedWei: string;
  arbitrageProtocolFeesAccruedEth: number;

  totalArbitrageProtocolFeesAccruedWei: string;
  totalArbitrageProtocolFeesAccruedEth: number;

  periodPayoutWei: string;
  periodPayoutEth: number;

  tokenPrice: number;
  periodAprByMultiplier: AprByMultiplier;
  avgStakePowerPerToken: number;
  periodApr: number;
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
  periodProtocolFeesPaidWei: string;
  periodProtocolFeesPaidEth: number;
  totalProtocolFeesPaidWei: string;
  totalProtocolFeesPaidEth: number;
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
