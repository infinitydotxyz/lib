import { ChainId } from '../ChainId';
import { CollectionDisplayData } from '../CollectionDisplayData';
import { CurationBlockRewardsDoc, CurationBlockUser } from './curation-block';
import { CurationPeriodDoc } from './curation-period';

export interface CurrentCurationSnippetMetadata {
  collectionAddress: string;
  collectionChainId: ChainId;
  stakerContractAddress: string;
  stakerContractChainId: ChainId;
  tokenContractAddress: string;
  tokenContractChainId: ChainId;
  updatedAt: number;
}

export interface CurrentCurationSnippetDoc {
  currentPeriod: Pick<CurationPeriodDoc, 'metadata' | 'stats'> | null;
  mostRecentCompletedPeriod: Pick<CurationPeriodDoc, 'metadata' | 'stats'> | null;

  currentBlock: Pick<CurationBlockRewardsDoc, 'metadata' | 'stats'> | null;
  mostRecentCompletedBlock: Pick<CurationBlockRewardsDoc, 'metadata' | 'stats'> | null;

  topCuratorsByVotes: Pick<CurationBlockUser, 'user' | 'stats'>[];
  topCuratorsByTotalProtocolFees: Pick<CurationBlockUser, 'user' | 'stats'>[];
  earliestCurators: Pick<CurationBlockUser, 'user' | 'stats'>[];

  collection: CollectionDisplayData;
  metadata: CurrentCurationSnippetMetadata;
}
