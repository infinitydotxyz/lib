import { FeedEventType } from '../../../core/feed';

// TODO: move this file elsewhere

export enum ActivityType {
  Sale = 'sale',
  Listing = 'listing',
  Offer = 'offer'
}

export const activityTypeToEventType = {
  [ActivityType.Sale]: FeedEventType.NftSale,
  [ActivityType.Listing]: FeedEventType.NftListing,
  [ActivityType.Offer]: FeedEventType.NftOffer
};
