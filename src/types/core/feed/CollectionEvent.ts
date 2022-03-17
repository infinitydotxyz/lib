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

  /**
   * link to the collection
   */
  internalUrl: string;
}

export type BaseCollectionEvent = BaseFeedEvent & CollectionEvent;
