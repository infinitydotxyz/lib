export enum EventType {
  /**
   * NFT EVENTS
   */
  NftSale = 'NFT_SALE',
  NftListing = 'NFT_LISTING',
  NftOffer = 'NFT_OFFER',
  TwitterTweet = 'TWITTER_TWEET',
  DiscordAnnouncement = 'DISCORD_ANNOUNCEMENT',
  CoinMarketCapNews = 'CMC_NEWS',
  NftTransfer = 'NFT_TRANSFER',
  TokensStaked = 'TOKENS_STAKED',
  TokensUnStaked = 'TOKENS_UN_STAKED',
  TokensRageQuit = 'TOKENS_RAGE_QUIT'
}

export const EventTypeNames: { [key: string]: string } = {
  [EventType.NftSale]: 'Sale',
  [EventType.NftListing]: 'Listing',
  [EventType.NftOffer]: 'Offer',
  [EventType.TwitterTweet]: 'Tweet',
  [EventType.DiscordAnnouncement]: 'Discord',
  [EventType.CoinMarketCapNews]: 'News',
  [EventType.NftTransfer]: 'Transfer',
  [EventType.TokensStaked]: 'Staked',
  [EventType.TokensUnStaked]: 'UnStaked',
  [EventType.TokensRageQuit]: 'Rage Quit'
};

export interface BaseFeedEvent {
  type: EventType;

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
