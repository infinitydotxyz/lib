import { BaseFeedEvent } from './FeedEvent';

export type TwitterMediaType = 'photo' | 'GIF' | 'video';

export interface TwitterTweetEvent extends BaseFeedEvent {
  /**
   * Tweet ID.
   */
  id: string;

  /**
   * Tweet author ID.
   */
  authorId?: string;

  /**
   * Tweet body.
   */
  text?: string;

  /**
   * Platform the tweet was sent from.
   */
  source?: string;

  /**
   * Optional image.
   */
  image?: string;

  /**
   * Language the tweet was written in.
   */
  language?: string;

  /**
   * Whether this tweet contains sensitive content.
   */
  isSensitive: boolean;

  username: string;
}
