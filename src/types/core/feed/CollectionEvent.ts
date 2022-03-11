import { BaseFeedEvent } from './FeedEvent';

export interface BaseCollectionEvent extends BaseFeedEvent {
    chainId: string;

    collectionAddress: string;

    /**
     * internal link to the collection
     */
    internalUrl: string;
}
