export enum FeedEventType {
  /**
   * NFT EVENTS
   */
  NftSale = 'NFT_SALE',
  NftListing = 'NFT_LISTING',
  NftOffer = 'NFT_OFFER',
  TwitterTweet = 'TWITTER_TWEET',
  DiscordAnnouncement = 'DISCORD_ANNOUNCEMENT',
  CoinMarketCapNews = 'CMC_NEWS'
}

export const FeedEventTypeNames: { [key: string]: string } = {
  [FeedEventType.NftSale]: 'Sale',
  [FeedEventType.NftListing]: 'Listing',
  [FeedEventType.NftOffer]: 'Offer',
  [FeedEventType.TwitterTweet]: 'Tweet',
  [FeedEventType.DiscordAnnouncement]: 'Discord',
  [FeedEventType.CoinMarketCapNews]: 'News'
};

export interface BaseFeedEvent {
  type: FeedEventType;

  /**
   * number of likes of the event
   */
  likes: number;

  /**
   * number of comments on the event
   */
  comments: number;

  /**
   * epoch timestamp in ms
   */
  timestamp: number;
}

export type BaseFeedEventWithTitle = BaseFeedEvent & { title: string };
