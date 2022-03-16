import { BaseFeedEvent } from './FeedEvent';

export interface CollectionEvent {
  chainId: string;

  collectionAddress: string;

  /**
   * collection name
   */
  name: string;

  /**
   * slug for the collection
   */
  slug: string;
}

export type BaseCollectionEvent = BaseFeedEvent & CollectionEvent;
