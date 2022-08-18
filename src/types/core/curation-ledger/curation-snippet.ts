import { ChainId } from '../ChainId';
import { CurationBlockRewardsDoc, CurationBlockUser } from './curation-block';
import { CurationPeriodDoc } from './curation-period';

export interface CurrentCurationSnippetDoc {
  currentPeriod: CurationPeriodDoc | null;
  mostRecentCompletedPeriod: CurationPeriodDoc | null;

  currentBlock: CurationBlockRewardsDoc | null;
  mostRecentCompletedBlock: CurationBlockRewardsDoc | null;

  topCuratorsByVotes: CurationBlockUser[];
  topCuratorsByTotalProtocolFees: CurationBlockUser[];
  earliestCurators: CurationBlockUser[];

  stakerContractAddress: string;
  stakerContractChainId: ChainId;
  tokenContractAddress: string;
  tokenContractChainId: ChainId;
  updatedAt: number;
}
