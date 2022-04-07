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
   * profile image for the collection
   */
  collectionProfileImage: string;

  /**
   * Whether the collection is verified
   */
  hasBlueCheck: boolean;

  /**
   * link to the collection
   */
  internalUrl: string;
}

export type BaseCollectionEvent = BaseFeedEvent & CollectionEvent;
