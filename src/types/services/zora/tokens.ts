import { Erc721Attribute } from '../../core';

export interface ZoraTokensResponse {
  tokens: {
    nodes: ZoraToken[];
    pageInfo: {
      endCursor: string;
      hasNextPage: boolean;
      limit: number;
    };
  };
}

export interface ZoraToken {
  token: {
    tokenId: string;
    name: string;
    owner: string;
    content: ZoraContent;
    image: ZoraContent;
    description: string;
    tokenUrl: string;
    tokenUrlMimeType: string;
    attributes: Erc721Attribute[];
    mintInfo: {
      mintContext: {
        blockNumber: number;
        blockTimestamp: string; // rfc
        transactionHash: string;
      };
      price: {
        chainTokenPrice: {
          currency: {
            address: string;
            decimals: number;
            name: string;
          };
          decimal: number;
        };
      };
      toAddress: string;
      originatorAddress: string;
    };
  };
}

export interface ZoraContent {
  url: string;
  size: string;
  mimeType: string;
  mediaEncoding: ZoraMediaEncoding;
}

export interface ZoraMediaEncoding {
  large: string;
  poster: string;
  preview: string;
  original: string;
  thumbnail: ZoraMediaEncoding;
}
