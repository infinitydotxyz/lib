import { SaleSource } from '../NftSale';
import { TokenStandard } from '../Token';
import { BaseCollectionEvent, CollectionEvent } from './CollectionEvent';
import { FeedEventType } from './FeedEvent';

/**
 * data needed for each nft event
 */
interface NftData extends CollectionEvent {
  tokenId: string;

  image: string;
}

interface BaseNftEvent extends BaseCollectionEvent, NftData {}

/**
 * represent an exchange of an nft from one wallet/user to another
 */
interface ExchangeEvent extends BaseNftEvent {
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

  tokenType: TokenStandard;

  txHash: string;

  quantity: number;
}

/**
 * -------- NFT Events --------
 */
export interface NftSaleEvent extends ExchangeEvent {
  type: FeedEventType.NftSale;
}
