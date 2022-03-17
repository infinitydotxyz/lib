export enum FeedEventType {
  /**
   * NFT EVENTS
   */
  NftSale = 'NFT_SALE',
  NftBatchSale = 'NFT_BATCH_SALE',
  NftListing = 'NFT_LISTING',
  NftOffer = 'NFT_OFFER',
  TwitterTweet = 'TWITTER_TWEET'
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
