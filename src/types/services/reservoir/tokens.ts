import { ReservoirCollection } from './collections';

export interface ReservoirDetailedTokensResponse {
  tokens: ReservoirToken[];
  continuation: string;
}

export interface ReservoirToken {
  token: {
    contract: string;
    tokenId: string;
    name: string;
    description: string;
    image: string;
    kind: string;
    collection: ReservoirCollection;
    owner: string;
    attributes: ReservoirAttribute[];
  };
}

export interface ReservoirAttribute {
  key: string;
  value: string;
  tokenCount: number;
}
