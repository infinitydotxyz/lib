import { Erc721Attribute, TokenStandard } from '../../core';

export interface AlchemyUserCollectionsResponse {
  contracts: AlchemyUserCollection[];
  pageKey: string;
}

export interface AlchemyUserCollection {
  address: string;
  totalBalance: number;
  numDistinctTokensOwned: number;
  tokenType: string;
  name: string;
  symbol: string;
  opensea: {
    floorPrice: number;
    collectionName: string;
    imageUrl: string;
  };
}

export interface AlchemyUserNftsResponse {
  ownedNfts: AlchemyNft[];

  pageKey?: string;

  totalCount: number;

  blockHash: string;
}

export interface AlchemyNftWithoutMetadata {
  contract: {
    address: string;
  };

  id: {
    tokenId: string; // hex string
  };

  balance: string;
}

export interface AlchemyNftWithMetadata {
  contract: {
    address: string;
  };

  id: {
    tokenId: string; // hex string

    tokenMetadata: {
      tokenType: TokenStandard;
    };
  };

  /**
   * name of the nft
   */
  title: string;

  description: string;

  tokenUri: {
    raw: string;

    gateway: string;
  };

  media: {
    raw: string;

    gateway: string;
  }[];

  metadata: {
    image: string;

    external_url: string;

    background_color: string;

    name: string;

    description: string;

    attributes: Erc721Attribute[] | any[];
  };
}

export interface AlchemyErc721NftWithMetadata extends AlchemyNftWithMetadata {
  id: {
    tokenId: string; // hex string

    tokenMetadata: {
      tokenType: TokenStandard.ERC721;
    };
  };

  metadata: {
    image: string;

    external_url: string;

    background_color: string;

    name: string;

    description: string;

    attributes: Erc721Attribute[];
  };
}

export interface AlchemyErc1155NftWithMetadata extends AlchemyNftWithMetadata {
  id: {
    tokenId: string; // hex string

    tokenMetadata: {
      tokenType: TokenStandard.ERC1155;
    };
  };
  metadata: {
    image: string;

    external_url: string;

    background_color: string;

    name: string;

    description: string;

    attributes: any[];
  };
}

export type AlchemyNft = AlchemyNftWithoutMetadata | AlchemyErc721NftWithMetadata | AlchemyErc1155NftWithMetadata;

export enum AlchemyMarketplaceSource {
  OpenSea = 'openSea',
  LooksRare = 'looksRare'
}

export interface MarketplaceFloorPrice {
  floorPrice: number;
  priceCurrency: string;
  retrievedAt: string;
  collectionUrl: string;
}

export type AlchemyFloorPriceResponse = Record<AlchemyMarketplaceSource, MarketplaceFloorPrice>;
