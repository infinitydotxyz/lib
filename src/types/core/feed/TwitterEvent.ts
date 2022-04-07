import { BaseCollectionEvent } from './CollectionEvent';
import { FeedEventType } from './FeedEvent';

export type TwitterMediaType = 'photo' | 'GIF' | 'video';

export interface TwitterTweetEvent extends BaseCollectionEvent {
  type: FeedEventType.TwitterTweet;

  /**
   * link to the tweet
   */
  externalLink: string;

  /**
   * Tweet ID
   */
  id: string;

  /**
   * Tweet author ID
   */
  authorId: string;

  /**
   * Tweet author username
   */
  username: string;

  /**
   * Tweet author profile image
   */
  authorProfileImage: string;

  /**
   * Tweet author name
   */
  authorName: string;

  /**
   * Whether the user is verified on twitter or not
   */
  authorVerified: boolean;

  /**
   * Tweet body.
   */
  text: string;

  /**
   * Platform the tweet was sent from.
   */
  source: string;

  /**
   * Optional image.
   */
  image?: string;

  /**
   * Language the tweet was written in.
   */
  language: string;

  /**
   * Whether this tweet contains sensitive content.
   */
  isSensitive: boolean;
}
