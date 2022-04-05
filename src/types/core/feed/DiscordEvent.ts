import { BaseFeedEvent } from '.';

export interface DiscordAttachment {
  /**
   * Link to the attachment.
   * This will be a URL to discord's CDN.
   */
  url: string;

  /**
   * Width (only if the attachment is an image).
   */
  width?: number;

  /**
   * Height (only if the attachment is an image).
   */
  height?: number;

  /**
   * Content type of the attachment
   */
  contentType?: string;

  /**
   * Description with more details.
   */
  description?: string;

  /**
   * Name of the attachment.
   * Usually the file name.
   */
  name?: string;
}

export interface DiscordAnnouncementEvent extends BaseFeedEvent {
  /**
   * Message ID.
   */
  id: string;

  /**
   * Discord server ID.
   */
  guildId: string;

  /**
   * User id of the sender of the discord message.
   */
  authorId: string;

  /**
   * Username of the sender of the discord message.
   */
  author: string;

  /**
   * Disocrd message body.
   */
  content: string;

  /**
   * Optional image.
   */
  attachments?: DiscordAttachment[];
}
