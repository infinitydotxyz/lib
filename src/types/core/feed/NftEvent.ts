import { BaseCollectionEvent } from './CollectionEvent';
import { FeedEventType } from './FeedEvent';

/**
 * nft event types
 *
 * sale
 * listing
 * offer
 * transfer
 * --------
 * TODO what about
 * listing expired ?
 * listing about to expire ?
 * offer expired ?
 * offer about to expire ?
 */

interface BaseNftEvent extends BaseCollectionEvent {
  tokenId: string;

  /**
   * internal link to the nft
   */
  internalUrl: string;
}

/**
 * represent an exchange of an nft from one wallet/user to another
 */
interface ExchangeEvent extends BaseNftEvent {
  buyer: string;

  buyerDisplayName?: string;

  seller: string;

  sellerDisplayName?: string;

  /**
   * etherscan link
   */
  externalLink: string;
}

interface TransactionEvent extends ExchangeEvent {
  /**
   *  TODO price in ETH ? what about other tokens
   */
  price: number;
}

/**
 * -------- NFT Events --------
 */
export interface NftSaleEvent extends TransactionEvent {
  type: FeedEventType.NftSale;
}

export interface NftListingEvent extends TransactionEvent {
  type: FeedEventType.NftListing;
}

export interface NftOfferEvent extends TransactionEvent {
  type: FeedEventType.NftOffer;
}

export interface NftTransfer extends ExchangeEvent {
  type: FeedEventType.NftTransfer;
}
