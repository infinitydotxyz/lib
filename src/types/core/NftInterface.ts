import { Erc721Attribute } from './Metadata';
import { OrdersSnippet } from './Token';

export enum ListingType {
  FixedPrice = 'fixedPrice',
  DutchAuction = 'dutchAuction',
  EnglishAuction = 'englishAuction'
}
/**
 * Integration with infinity.xyz discord bot.
 */
export interface DiscordIntegration {
  /**
   * Id of the discord server that is linked to this collection.
   */
  guildId?: string;

  /**
   * List of channels to monitor for feed data.
   */
  channels?: string[];
}

export interface CollectionIntegrations {
  discord?: DiscordIntegration;
}

export enum OrderType {
  BUY,
  SELL
}

export type BaseCardData = {
  id: string;
  title: string;
  name?: string;
  description?: string;
  image?: string;
  cardImage?: string;
  imagePreview?: string;
  price?: number;
  inStock?: number;
  tokenAddress?: string;
  address?: string; // tokenAddress = address = collectionAddress
  tokenId?: string;
  collectionName?: string;
  collectionSlug?: string;
  maker?: string;
  hasBonusReward?: boolean;
  hasBlueCheck?: boolean;
  owner?: string;
  schemaName?: string;
  expirationTime?: string;
  chainId?: string;
  rarityRank?: number;
  rarityScore?: number;
  orderSnippet?: OrdersSnippet;
  isVideo?: boolean;
};

export type CardData = BaseCardData & {
  openseaListing?: BaseCardData;
};

export type ERC721CardData = CardData & {
  attributes?: Erc721Attribute[];
};

export enum WyvernSchemaName {
  ERC20 = 'ERC20',
  ERC721 = 'ERC721',
  ERC1155 = 'ERC1155',
  LegacyEnjin = 'Enjin',
  ENSShortNameAuction = 'ENSShortNameAuction',
  CryptoPunks = 'CryptoPunks'
}

/**
 * The NFT version that this contract uses.
 * ERC721 versions are:
 * 1.0: CryptoKitties and early 721s, which lack approve-all and
 *      have problems calling `transferFrom` from the owner's account.
 * 2.0: CryptoSaga and others that lack `transferFrom` and have
 *      `takeOwnership` instead
 * 3.0: The current OpenZeppelin standard:
 *      https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/token/ERC721/ERC721.sol
 * Special cases:
 * locked: When the transfer function has been locked by the dev
 */
export enum TokenStandardVersion {
  Unsupported = 'unsupported',
  Locked = 'locked',
  Enjin = '1155-1.0',
  ERC721v1 = '1.0',
  ERC721v2 = '2.0',
  ERC721v3 = '3.0'
}
