import { ChainId } from '../ChainId';
import { StakeDuration } from '../StakeDuration';
import { StakeInfo } from '../StakerEvents';
import { BaseFeedEvent, EventType } from './FeedEvent';
import { UserEvent } from './UserEvent';

export interface BaseStakerFeedEvent extends BaseFeedEvent, UserEvent {
  userAddress: string;
  userDisplayName?: string;
  amount: string;
  timestamp: number;
  blockNumber: number;
  txHash: string;
  stakerContractAddress: string;
  stakerChainId: ChainId;
  stakeInfo: StakeInfo;
  stakePower: number;
}

export interface TokensStakedEvent extends BaseStakerFeedEvent {
  type: EventType.TokensStaked;
  duration: StakeDuration;
}

export interface TokensUnStakedEvent extends BaseStakerFeedEvent {
  type: EventType.TokensUnStaked;
}

export interface TokensRageQuitEvent extends BaseStakerFeedEvent {
  type: EventType.TokensRageQuit;
  penaltyAmount: string;
}
