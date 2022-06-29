export interface ReservoirSingleCollectionResponse {
  collection: ReservoirCollection;
}

export interface ReservoirCollection {
  id: string;
  name: string;
  slug: string;
  image: string;
  metadata: ReservoirCollectionMetadata;
  sampleImages: string[];
  tokenCount: string | number;
  ownerCount: string | number;
  attributes: ReservoirCollectionAttribute[];
}

export interface ReservoirCollectionAttribute {
  key: string;
  kind: string;
  count: number;
}

export interface ReservoirCollectionMetadata {
  imageUrl: string;
  discordUrl: string;
  description: string;
  externalUrl: string;
  bannerImageUrl: string;
  twitterUsername: string;
}
