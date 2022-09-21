import { CoinMarketCapNewsEvent } from './CoinMarketCapEvent';
import { UserRageQuitEvent, UserStakedEvent, UserUnStakedEvent, UserVoteEvent, UserVoteRemovedEvent } from './curation';
import { DiscordAnnouncementEvent } from './DiscordEvent';
import { NftListingEvent, NftOfferEvent, NftSaleEvent, NftTransferEvent } from './NftEvent';
import { TwitterTweetEvent } from './TwitterEvent';

export * from './CoinMarketCapEvent';
export * from './CollectionEvent';
export * from './DiscordEvent';
export * from './FeedEvent';
export * from './NftEvent';
export * from './OrderBookEvent';
export * from './TwitterEvent';
export * from './UserEvent';
export * from './curation';

export type FeedEvent =
  | CoinMarketCapNewsEvent
  | DiscordAnnouncementEvent
  | TwitterTweetEvent
  | UserStakedEvent
  | UserUnStakedEvent
  | UserRageQuitEvent
  | UserVoteEvent
  | UserVoteRemovedEvent
  | NftTransferEvent
  | NftSaleEvent
  | NftOfferEvent
  | NftListingEvent;

export type UserFeedEvent =
  | UserStakedEvent
  | UserUnStakedEvent
  | UserRageQuitEvent
  | UserVoteEvent
  | UserVoteRemovedEvent
  | NftTransferEvent
  | NftSaleEvent
  | NftOfferEvent
  | NftListingEvent;

export type NewsEvent = CoinMarketCapNewsEvent | DiscordAnnouncementEvent | TwitterTweetEvent;
