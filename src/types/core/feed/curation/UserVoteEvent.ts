import { BaseCollectionEvent } from '../CollectionEvent';
import { EventType } from '../FeedEvent';
import { BaseUserStakeFeedEvent } from './UserStakeEvent';

export interface UserVoteEvent extends BaseUserStakeFeedEvent, BaseCollectionEvent {
  type: EventType.UserVote;

  /**
   * Votes added in this event.
   */
  votesAdded: number;

  /**
   * Current total votes the curator has in the collection.
   */
  votes: number;

  /**
   * Current total number of votes from curators for the collection
   */
  numCuratorVotes: number;
}

export interface UserUnVoteEvent extends BaseUserStakeFeedEvent, BaseCollectionEvent {
  type: EventType.UserUnVote;

  /**
   * Votes removed in this event.
   */
  votesRemoved: number;

  /**
   * Current total votes the curator has in the collection.
   */
  votes: number;

  /**
   * Current total number of votes from curators for the collection
   */
  numCuratorVotes: number;
}
