import { BaseCollectionEvent } from '../CollectionEvent';
import { EventType } from '../FeedEvent';
import { BaseUserStakeFeedEvent } from './UserStakeEvent';

export interface UserVoteEvent extends BaseUserStakeFeedEvent, BaseCollectionEvent {
  type: EventType.UserVote;

  /**
   * Votes added in this event.
   */
  votesAdded: number;
}

export interface UserVoteRemovedEvent extends BaseUserStakeFeedEvent, BaseCollectionEvent {
  type: EventType.UserVoteRemoved;

  /**
   * Votes removed in this event.
   */
  votesRemoved: number;
}
