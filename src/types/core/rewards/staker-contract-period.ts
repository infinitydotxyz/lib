import { ChainId } from '../ChainId';
import { CurationPeriodStats, CurationPeriodUserStats } from '../curation-ledger';
import { UserDisplayData } from '../UserDisplayData';

export interface StakerContractPeriodMetadata {
  stakerContractAddress: string;
  stakerContractChainId: ChainId;
  tokenContractAddress: string;
  tokenContractChainId: ChainId;
  timestamp: number;
  updatedAt: number;
  trigger: boolean;
  periodDuration: number;
}

export interface StakerContractPeriodStats
  extends Omit<
    CurationPeriodStats,
    | 'periodAprByMultiplier'
    | 'tokenPrice'
    | 'avgStakePowerPerToken'
    | 'periodApr'
    | 'totalProtocolFeesAccruedWei'
    | 'totalProtocolFeesAccruedEth'
    | 'totalArbitrageProtocolFeesAccruedWei'
    | 'totalArbitrageProtocolFeesAccruedEth'
  > {
  totalCurators: number;
  numCollections: number;
}

export interface StakerContractPeriodDoc {
  metadata: StakerContractPeriodMetadata;
  stats: StakerContractPeriodStats;
}

export interface StakerContractPeriodUserStats
  extends Omit<
    CurationPeriodUserStats,
    'periodApr' | 'tokenPrice' | 'totalProtocolFeesAccruedWei' | 'totalProtocolFeesAccruedEth'
  > {
  collectionsCurated: number;
}

export type StakerContractCurationPeriodUserMetadata = Omit<StakerContractPeriodMetadata, 'trigger'> & {
  userAddress: string;
  updatedAt: number;
};

export interface StakerContractPeriodUserDoc {
  user: UserDisplayData;
  stats: StakerContractPeriodUserStats;
  metadata: StakerContractCurationPeriodUserMetadata;
}
