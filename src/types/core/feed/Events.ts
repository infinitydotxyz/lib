import { CoinMarketCapNewsEvent } from './CoinMarketCapEvent';
import { UserStakedEvent, UserUnStakedEvent, UserRageQuitEvent, UserVoteEvent, UserVoteRemovedEvent } from './curation';
import { DiscordAnnouncementEvent } from './DiscordEvent';
import { NftTransferEvent, NftSaleEvent, NftOfferEvent, NftListingEvent } from './NftEvent';
import { TwitterTweetEvent } from './TwitterEvent';

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
