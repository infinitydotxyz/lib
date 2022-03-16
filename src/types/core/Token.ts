import { Erc721Metadata } from './Metadata';

export enum TokenStandard {
  ERC721 = 'ERC721',
  ERC1155 = 'ERC1155'
}

export type TokenMetadata = Erc721Metadata;

export type MintToken = Pick<
  Token,
  'chainId' | 'mintedAt' | 'minter' | 'tokenId' | 'state' | 'mintTxHash' | 'mintPrice'
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

export interface BaseToken {
  chainId: string;

  /**
   * search friendly name for this token
   * not the same as the collection slug
   */
  slug: string;

  /**
   * original minter of the token
   */
  minter: string;

  tokenId: string;

  /**
   * unix timestamp (in ms)
   */
  mintedAt: number;

  mintTxHash: string;

  mintPrice: number;

  /**
   * unix timestamp (in ms) of when the token was burned
   *
   * only available if the token has been burned
   */
  destroyedAt?: number;

  /**
   * cached raw metadata
   */
  metadata: TokenMetadata;

  /**
   * number of trait_types that this token has
   */
  numTraitTypes: number;

  /**
   * unix timestamp (in ms) that the token metadata was updated at
   */
  updatedAt: number;

  tokenUri: string;

  /**
   * sum of the token's rarity scores
   *
   * should not be changed until all tokens are ready to be updated
   */
  rarityScore: number;

  /**
   * rank relative to other items in the collection
   */
  rarityRank: number;

  /**
   * cached token image
   */
  image: {
    /**
     * cached OS url
     */
    url: string;

    /**
     * original url
     */
    originalUrl?: string;

    /**
     * unix timestamp (in ms) of when the image was updated
     */
    updatedAt: number;
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

export type Token = Erc721Token;
