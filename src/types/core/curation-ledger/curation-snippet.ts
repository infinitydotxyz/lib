import { ChainId } from '../ChainId';
import { CollectionDisplayData } from '../CollectionDisplayData';
import { CurationBlockRewardsDoc } from './curation-block';
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

  collection: CollectionDisplayData;
  metadata: CurrentCurationSnippetMetadata;
}
