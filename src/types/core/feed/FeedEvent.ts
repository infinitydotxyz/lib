export enum FeedEventType {
  NftSale = 'NFT_SALE',
  NftListing = 'NFT_LISTING',
  NftOffer = 'NFT_OFFER',
  NftTransfer = 'NFT_Transfer'
}

export interface BaseFeedEvent {
  type: FeedEventType;

  title: string;

  /**
   * number of likes of the event
   */
  likes: number;

  /**
   * number of comments on the event
   */
  comments: number;

  /**
   * epoch timestamp in ms
   */
  timestamp: number;
}

