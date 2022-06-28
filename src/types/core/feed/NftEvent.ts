import { SaleSource } from '../NftSale';
import { TokenStandard } from '../Token';
import { BaseCollectionEvent, CollectionEvent } from './CollectionEvent';
import { FeedEventType } from './FeedEvent';
import { OrderBookEvent } from './OrderBookEvent';
import { UserEvent } from './UserEvent';

/**
 * data needed for each nft event
 */
interface NftData extends CollectionEvent {
  tokenId: string;

  image: string;

  /**
   * name of the nft
   */
  nftName: string;

  /**
   * slug for the nft
   */
  nftSlug: string;

  /**
   * link to the nft
   */
  internalUrl: string;
}

export interface BaseNftEvent extends BaseCollectionEvent, NftData {}

/**
 * represent an exchange of an nft from one wallet/user to another
 */
interface BaseExchangeEvent {
  buyer: string;

  buyerDisplayName?: string;

  seller: string;

  sellerDisplayName?: string;

  price: number;

  /**
   * payment token address
   */
  paymentToken: string;

  source: SaleSource;

  tokenStandard: TokenStandard;

  txHash: string;

  quantity: number;

  /**
   * etherscan link
   */
  externalUrl: string;
}

export type ExchangeEvent = BaseExchangeEvent & BaseNftEvent & UserEvent;

/**
 * -------- NFT Events --------
 */
export interface NftTransferEvent extends Omit<BaseNftEvent, 'collectionProfileImage'> {
  type: FeedEventType.NftTransfer;
  from: string;
  to: string;
  fromDisplayName?: string;
  toDisplayName?: string;
  tokenStandard: TokenStandard;
  txHash: string;
  quantity: number;
  /**
   * etherscan link
   */
  externalUrl: string;
}

export interface NftSaleEvent extends ExchangeEvent {
  type: FeedEventType.NftSale;
}

export interface NftOfferEvent extends OrderBookEvent {
  type: FeedEventType.NftOffer;

  isSellOrder: false;
}

export interface NftListingEvent extends OrderBookEvent {
  type: FeedEventType.NftListing;

  isSellOrder: true;
}
