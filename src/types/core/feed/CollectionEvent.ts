import { BaseFeedEvent } from './FeedEvent';

export interface CollectionEvent {
  chainId: string;
  collectionAddress: string;

  name: string;

  slug: string;
}

export type BaseCollectionEvent = BaseFeedEvent & CollectionEvent;

export interface BaseBatchCollectionEvent<T extends CollectionEvent> extends BaseFeedEvent {
    batch: T[]
}
