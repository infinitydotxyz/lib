import { ChainOBOrderDto } from '../dto/orders/chain-ob-order.dto';
import { ZoraContent } from '../services/zora/tokens';
import { Erc721Metadata } from './Metadata';
import { FirestoreOrderItem } from './OBOrder';

export enum TokenStandard {
  ERC721 = 'ERC721',
  ERC1155 = 'ERC1155'
}

export type Erc1155Metadata = {
  name: string;
  description: string;
  image: string;
  // future-TODO add attributes/properties
};

export type TokenMetadata = Erc721Metadata | Erc1155Metadata;

export type MintToken = Pick<
  Token,
  | 'chainId'
  | 'mintedAt'
  | 'minter'
  | 'tokenId'
  | 'state'
  | 'mintTxHash'
  | 'mintPrice'
  | 'mintCurrencyAddress'
  | 'mintCurrencyDecimals'
  | 'mintCurrencyName'
  | 'image'
  | 'tokenUri'
>;

export type UriData = Pick<Token, 'tokenUri'>;
export type UriToken = MintToken & UriData;

export type MetadataData = Pick<Token, 'slug' | 'metadata' | 'numTraitTypes' | 'updatedAt' | 'tokenId'>;
export type MetadataToken = UriToken & MetadataData;

export type ImageData = Pick<Token, 'image' | 'tokenId'>;
export type ImageToken = MetadataToken & ImageData;

export type AggregatedData = Pick<Token, 'rarityScore' | 'rarityRank'>;
export type AggregatedToken = ImageToken & AggregatedData;
export interface RefreshTokenErrorJson {
  message: string;

  discriminator: RefreshTokenFlow;
}

export type OwnerInfo = {
  address: string;
  config?: string;
  profile_img_url?: string;
};

export enum RefreshTokenFlow {
  Mint = 'mint',
  /**
   * get the token uri
   */
  Uri = 'token-uri',

  /**
   * get the token metadata
   */
  Metadata = 'token-metadata',

  CacheImage = 'token-cache-image',

  /**
   * upload the image to gcs
   */
  Image = 'token-image',

  Complete = 'complete'
}

export interface OrdersSnippet {
  listing?: OrderItemSnippet;
  offer?: OrderItemSnippet;
}

export interface OrderItemSnippet {
  /**
   * whether there is an order for this nft
   */
  hasOrder: boolean;
  /**
   * id of the order item in firestore
   */
  orderItemId?: string;
  orderItem?: FirestoreOrderItem | null;
  signedOrder?: ChainOBOrderDto;
}

export interface BaseToken {
  chainId?: string;

  collectionAddress?: string;

  collectionSlug?: string;

  collectionName?: string;

  collectionProfileImage?: string;

  collectionBannerImage?: string;

  collectionDescription?: string;

  collectionSymbol?: string;

  displayType?: string;

  /**
   * whether the collection is verified
   */
  hasBlueCheck?: boolean;

  /**
   * search friendly name for this token
   * not the same as the collection slug
   */
  slug?: string;

  tokenId: string;

  tokenIdNumeric: number;

  /**
   * original minter of the token
   */
  minter?: string;
  /**
   * unix timestamp (in ms)
   */
  mintedAt?: number;

  mintTxHash?: string;

  mintPrice?: number;

  mintCurrencyAddress?: string;

  mintCurrencyDecimals?: number;

  mintCurrencyName?: string;

  /**
   * unix timestamp (in ms) of when the token was burned
   *
   * only available if the token has been burned
   */
  destroyedAt?: number;

  /**
   * cached raw metadata
   */
  metadata?: TokenMetadata;

  /**
   * number of trait_types that this token has
   */
  numTraitTypes?: number;

  /**
   * unix timestamp (in ms) that the token metadata was updated at
   */
  updatedAt?: number;

  tokenUri?: string;

  owner?: string | OwnerInfo;

  /**
   * sum of the token's rarity scores
   *
   * should not be changed until all tokens are ready to be updated
   */
  rarityScore?: number;

  /**
   * rank relative to other items in the collection
   */
  rarityRank?: number;

  ordersSnippet?: OrdersSnippet;

  zoraImage?: ZoraContent;

  zoraContent?: ZoraContent;

  alchemyCachedImage?: string;

  lastSalePriceEth?: number;

  lastSaleTimestamp?: number;

  isFlagged?: boolean;

  lastFlagUpdate?: number;

  lastFlagChange?: string;

  /**
   * cached token image
   */
  image?: {
    /**
     * cached OS url
     */
    url?: string; // making this optional due to change in the flow of collection indexing steps

    /**
     * original url
     */
    originalUrl?: string;

    /**
     * unix timestamp (in ms) of when the image was updated
     */
    updatedAt?: number;
  };

  state?: {
    metadata: {
      step: RefreshTokenFlow;
      error?: RefreshTokenErrorJson;
    };
  };
}

export interface Erc721Token extends BaseToken {
  metadata: Erc721Metadata;
  tokenStandard: TokenStandard.ERC721;
}

export interface Erc1155Token extends BaseToken {
  metadata: Erc1155Metadata;
  tokenStandard: TokenStandard.ERC1155;
}

export type Token = Erc721Token | Erc1155Token;
