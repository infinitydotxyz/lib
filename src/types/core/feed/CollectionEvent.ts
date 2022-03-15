import { BaseFeedEvent } from './FeedEvent';

export interface CollectionEvent {
  chainId: string;

  collectionAddress: string;

  name: string;

  slug: string;
}

export type BaseCollectionEvent = BaseFeedEvent & CollectionEvent;
