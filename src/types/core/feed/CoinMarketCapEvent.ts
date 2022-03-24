import { BaseFeedEvent } from '.';

export interface CoinMarketCapNewsEvent extends BaseFeedEvent {
  /**
   * Unique identifier of the news item.
   */
  id: string;

  /**
   * Optional thumbnail image.
   */
  cover?: string;

  /**
   * Date the news item was added to CMC.
   */
  createdAt: string;

  /**
   * Meta data.
   */
  meta: CoinMarketCapMeta;
}

export interface CoinMarketCapMeta {
  /**
   * Title of the article.
   */
  title: string;

  /**
   * Subtitle of the article.
   */
  subtitle: string;

  /**
   * Article contents.
   * Ususally this doesn't contain the while article body; users should visit the source to read more.
   */
  content: string;

  /**
   * Name of the source where the article originally came from.
   */
  sourceName: string;

  /**
   * Original source URL of the article.
   */
   sourceUrl: string;

  /**
   * Language the article was written in.
   */
  language: string;

  /**
   * Publish status.
   */
  status: string;

  /**
   * Whether the article is visible to the user.
   */
  visibility: boolean;

  /**
   * Date the article was published at the specific source.
   */
  createdAt: string;

  /**
   * Date the article was updated at the specific source.
   */
  updatedAt: string;

  /**
   * Date the article was publically released at the specific source.
   */
  releasedAt: string;
}
