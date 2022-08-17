import { ChainId } from '../../ChainId';
import { BaseFeedEvent } from '../FeedEvent';

export interface BaseStakerContractEvent extends BaseFeedEvent {
  stakerContractAddress: string;
  stakerContractChainId: ChainId;
  tokenContractAddress: string;
  tokenContractChainId: ChainId;
}
