import { StakeDuration } from '../../StakeDuration';
import { StakeInfo } from '../../StakerEvents';
import { BaseFeedEvent, EventType } from '../FeedEvent';
import { UserEvent } from '../UserEvent';
import { BaseStakerContractEvent } from './StakerContractEvent';

export interface BaseUserStakeFeedEvent extends BaseFeedEvent, UserEvent, BaseStakerContractEvent {
  userAddress: string;
  userUsername: string;
  userDisplayName: string;
  userProfileImage: string;

  /**
   * Currant stake info for the user.
   */
  stakeInfo: StakeInfo;

  /**
   * Current stake power for the user.
   */
  stakePower: number;
}

export interface BaseUserStakeContractEvent extends BaseUserStakeFeedEvent {
  /**
   * Number of tokens staked/received by the user during this event (wad).
   */
  amount: string;

  timestamp: number;

  blockNumber: number;

  txHash: string;
}

export interface UserStakedEvent extends BaseUserStakeContractEvent {
  type: EventType.TokensStaked;

  /**
   * Duration the user staked the tokens for.
   */
  duration: StakeDuration;
}

export interface UserUnStakedEvent extends BaseUserStakeContractEvent {
  type: EventType.TokensUnStaked;
}

export interface UserRageQuitEvent extends BaseUserStakeContractEvent {
  type: EventType.TokensRageQuit;

  /**
   * Number of tokens lost due to the rage quit (wad).
   */
  penaltyAmount: string;
}
