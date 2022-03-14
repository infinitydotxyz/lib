import { SaleSource } from '../NftSale';
import { TokenStandard } from '../Token';
import { BaseBatchCollectionEvent, BaseCollectionEvent, CollectionEvent } from './CollectionEvent';
import { FeedEventType } from './FeedEvent';

/**
 * data needed for each nft event
 */
interface NftData extends CollectionEvent {
  tokenId: string;

  image: string;

  /**
   * internal link to the nft
   */
  internalUrl: string;
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

  /**
   * etherscan link
   */
  externalLink: string;

  txHash: string;
}

type BatchExchangeEvent<T extends NftData> = BaseBatchCollectionEvent<T>;

/**
 * -------- NFT Events --------
 */
export interface NftSaleEvent extends ExchangeEvent {
  type: FeedEventType.NftSale;
}

export interface BatchNftSaleEvent extends BatchExchangeEvent<NftData> {
  type: FeedEventType.NftBatchSale;
}
