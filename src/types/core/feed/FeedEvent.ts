export enum FeedEventType {
  /**
   * NFT EVENTS
   */
  NftSale = 'NFT_SALE',
  NftListing = 'NFT_LISTING', // TODO needs implementation
  NftOffer = 'NFT_OFFER', // TODO needs implementation
  TwitterTweet = 'TWITTER_TWEET',
  DiscordAnnouncement = 'DISCORD_ANNOUNCEMENT',
  CoinMarketCapNews = 'CMC_NEWS',
}

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
