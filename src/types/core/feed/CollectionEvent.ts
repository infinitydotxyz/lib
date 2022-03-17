import { BaseFeedEvent } from './FeedEvent';

export interface CollectionEvent {
  chainId: string;

  collectionAddress: string;

  /**
   * collection name
   */
  collectionName: string;

  /**
   * slug for the collection
   */
  collectionSlug: string;
}

export type BaseCollectionEvent = BaseFeedEvent & CollectionEvent;
