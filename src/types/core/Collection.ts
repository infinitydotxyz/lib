import { TokenStandard } from './Token';
import { DisplayType } from './Metadata';
import { CollectionIntegrations } from './NftInterface';

export type Collection = Erc721Collection | Erc1155Collection;
export interface Erc721Collection extends BaseCollection {
  tokenStandard: TokenStandard.ERC721;
}

export interface Erc1155Collection extends BaseCollection {
  tokenStandard: TokenStandard.ERC1155;
  // TODO this is not finished
}

export enum CreationFlow {
  /**
   * get collection deployer info and owner
   */
  CollectionCreator = 'collection-creator',

  /**
   * get the collection level metadata
   * links, name, description, images, symbol
   */
  CollectionMetadata = 'collection-metadata',

  /**
   * get all token ids, timestamp and block minted
   * and minter
   */
  CollectionMints = 'collection-mints',

  /**
   * get metadata for every token
   */
  TokenMetadata = 'token-metadata',

  /**
   * get metadata for every token from OS
   */
  TokenMetadataOS = 'token-metadata-os',

  /**
   * get metadata for every token from opensea
   */
  // TokenMetadataOS = 'token-metadata-os',

  /**
   * get metadata for every token from uri
   */
  TokenMetadataUri = 'token-metadata-uri',

  /**
   * requires that we have every token
   */
  AggregateMetadata = 'aggregate-metadata',

  /**
   * cache image
   */
  CacheImage = 'cache-image',

  /**
   * validate images
   */
  ValidateImage = 'validate-image',

  /**
   * at this point we have successfully completed all steps above
   */
  Complete = 'complete',

  /**
   * at this point we have successfully completed all steps but some data is missing
   */
  Incomplete = 'incomplete',

  /**
   * at this point you give up
   */
  Unknown = 'unknown',

  /**
   * force stop
   */
  Invalid = 'invalid'
}

export type CollectionPeriodStatsContent = {
  chainId?: string;
  contractAddress?: string;
  avgPrice?: number;
  minPrice?: number;
  maxPrice?: number;
  salesVolume?: number;
  ownerCount?: number;
  tokenCount?: number;
  numSales?: number;
  updatedAt?: number;
};

export type CollectionPeriodStats = {
  daily?: CollectionPeriodStatsContent;
  weekly?: CollectionPeriodStatsContent;
  monthly?: CollectionPeriodStatsContent;
  allTime?: CollectionPeriodStatsContent;
};

export interface BaseCollection {
  chainId: string;

  address: string;

  tokenStandard: TokenStandard;

  /**
   * whether the collection is verified
   */
  hasBlueCheck: boolean;

  /**
   * deployer of the contract
   * (i.e the address that created the contract)
   */
  deployer: string;

  /**
   * unix timestamp that the contract was deployed at (in ms)
   */
  deployedAt: number;

  /**
   * block the collection was deployed at
   */
  deployedAtBlock: number;

  /**
   * current owner of the contract
   */
  owner: string;

  /**
   * number of unique owners
   */
  numOwners?: number;

  /**
   * Total number of votes from curators.
   *
   * Please keep in mind that this value does NOT represent the amount of curators, but only the TOTAL SUM of all votes from curators.
   * If you need to know the former, read the `numCurators` field instead.
   */
  numCuratorVotes?: number;

  /**
   * Total amount of curators.
   */
  numCurators?: number;

  numOwnersUpdatedAt: number;

  /**
   * editable collection metadata
   */
  metadata: CollectionMetadata;

  slug: string;

  /**
   * number of available tokens in the collection
   * (i.e. not burned/destroyed)
   */
  numNfts: number;

  /**
   * attributes/trait types.
   */
  attributes?: CollectionAttributes;

  /**
   * total number of trait_types in the collection
   */
  numTraitTypes: number;

  indexInitiator: string;

  /**
   *
   */
  state: {
    version: number;
    create: {
      step: CreationFlow;
      /**
       * epoch of when the step/error was last updated
       */
      updatedAt: number;
      error?: Record<string, any>;
      progress: number;
      zoraCursor?: string;
      reservoirCursor?: string;
    };
    export: {
      done: boolean;
    };
  };

  stats?: CollectionPeriodStats;
}

export interface TraitValueMetadata {
  /**
   * number of tokens with this trait
   */
  count: number;

  /**
   * percent of tokens with this trait
   */
  percent: number;

  /**
   * 1 / (percent / 100)
   */
  rarityScore: number;

  attributeType: string;
  attributeTypeSlug: string;
  attributeValue: string | number;
  attributeValueSlug: string;
}

/**
 * Collection metadata that can be edited by the owner
 */
export interface CollectionMetadata {
  name: string;
  description: string;
  symbol: string;
  profileImage: string;
  bannerImage: string;
  links: Links;
  benefits?: string[];
  partnerships?: Partnership[];
  integrations?: CollectionIntegrations;
  displayType?: string;
  updatedAt?: number;
}

/**
 * Relevant links
 */
export interface Links {
  timestamp: number;
  twitter?: string;
  discord?: string;
  external?: string;
  medium?: string;
  slug?: string;
  telegram?: string;
  instagram?: string;
  wiki?: string;
  facebook?: string;
}

export interface Partnership {
  name: string;
  link: string;
}

export interface CollectionAttributes {
  [traitType: string]: CollectionAttribute;
}

export interface CollectionAttribute {
  displayType?: DisplayType;

  attributeType: string;
  attributeTypeSlug: string;

  /**
   * number of nfts with this trait type
   */
  count: number;

  /**
   * percent of nfts with this trait type
   */
  percent: number;

  /**
   * values.
   */
  values: { [traitValue: string | number]: TraitValueMetadata };
}
