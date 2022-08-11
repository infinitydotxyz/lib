import { ChainId } from '../ChainId';
import { CurationBlockRewards, CurationBlockRewardsDoc, CurationBlockUser } from './curation-block';
import { CurationPeriod, CurationPeriodDoc } from './curation-period';

export interface CurrentCurationSnippet {
  currentPeriod: CurationPeriod;
  currentBlock: CurationBlockRewards;

  prevPeriod: CurationPeriod;
  prevBlock: CurationPeriod;
  stakerContractAddress: string;
  stakerContractChainId: ChainId;
}

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
  updatedAt: number;
}
