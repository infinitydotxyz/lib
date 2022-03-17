import { BaseFeedEvent } from './FeedEvent';

export interface TwitterUser {
  location?: string;

  /**
   * Display name on twitter.
   */
  name: string;

  profileImageUrl?: string;

  /**
   * Unique twitter handle.
   */
  username: string;

  isVerified: boolean;
}

export interface TwitterMedia {
  height: number;
  width: number;
  previewImageUrl: string;
  type: 'photo' | 'GIF' | 'video';
  url: string;
  altText: string;
}

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

  user?: TwitterUser;

  media?: TwitterMedia;
}
