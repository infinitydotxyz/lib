export enum ReservorCollsSortBy {
  ONE_DAY_VOLUME = '1DayVolume',
  SEVEN_DAY_VOLUME = '7DayVolume',
  THIRTY_DAY_VOLUME = '30DayVolume',
  ALL_TIME_VOLUME = 'allTimeVolume',
  CREATED_AT = 'createdAt',
  FLOOR_ASK_PRICE = 'floorAskPrice'
}

export interface ReservoirCollectionsV5 {
  collections: ReservoirCollectionV5[];
  continuation: string;
}

export interface ReservoirCollectionV5 {
  id: string;
  name: string;
  slug: string;
  image: string;
  banner: string;
  discordUrl: string;
  externalUrl: string;
  twitterUsername: string;
  openseaVerificationStatus: string;
  description: string;
  sampleImages: string[];
  tokenCount: string;
  onSaleCount: string;
  primaryContract: string;
  floorAsk: ReservoirCollectionFloorAskV5;
  topBid: ReservoirCollectionTopBidV5;
  rank: ReservoirCollectionPeriodStat;
  volume: ReservoirCollectionPeriodStat;
  volumeChange: ReservoirCollectionPeriodStat;
  floorSale: ReservoirCollectionPeriodStat;
  floorSaleChange: ReservoirCollectionPeriodStat;
  collectionBidSupported: boolean;
  ownerCount?: string | number;
  salesCount?: ReservoirCollectionPeriodStat;
  attributes?: ReservoirCollectionAttribute[];
}

export interface ReservoirCollectionFloorAskV5 {
  id: string;
  sourceDomain: string;
  price: {
    currency: {
      symbol: string;
      decimals: number;
      name: string;
      contract: string;
    };
    amount: {
      raw: string;
      decimal: number;
      usd: number;
      native: number;
    };
  };
  maker: string;
  validFrom: number;
  validUntil: number;
  token: {
    contract: string;
    tokenId: string;
    name: string;
    image: string;
  };
}

export interface ReservoirCollectionTopBidV5 {
  id: string;
  sourceDomain: string;
  price: {
    currency: {
      symbol: string;
      decimals: number;
      name: string;
      contract: string;
    };
    amount: {
      raw: string;
      decimal: number;
      usd: number;
      native: number;
    };
  };
  maker: string;
  validFrom: number;
  validUntil: number;
  token?: {
    contract: string;
    tokenId: string;
    name: string;
    image: string;
  };
  netAmount?: {
    raw: string;
    decimal: number;
    usd: number;
    native: number;
  };
}

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
  onSaleCount: string | number;
  floorAsk: ReservoirCollectionFloorAsk;
  topBid: ReservoirCollectionTopBid;
  rank: ReservoirCollectionPeriodStat;
  volume: ReservoirCollectionPeriodStat;
  volumeChange: ReservoirCollectionPeriodStat;
  floorSale: ReservoirCollectionPeriodStat;
  floorSaleChange: ReservoirCollectionPeriodStat;
  attributes: ReservoirCollectionAttribute[];
}

export interface ReservoirCollectionFloorAsk {
  id: string;
  price: number;
  maker: string;
  validFrom: number;
  validUntil: number;
  token: {
    contract: string;
    tokenId: string;
    name: string;
    image: string;
  };
}

export interface ReservoirCollectionTopBid {
  id: string;
  value: number;
  maker: string;
  validFrom: number;
  validUntil: number;
}

export interface ReservoirCollectionPeriodStat {
  '1day': string | number;
  '7day': string | number;
  '30day': string | number;
  allTime?: string | number;
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

export interface ReservoirTopOwner {
  address: string;
  ownership: {
    tokenCount: string;
    onSaleCount: string;
    floorAskPrice: number;
    topBidValue: number;
    totalBidValue: number;
  };
}

export interface ReservoirTopCollectionOwnersResponse {
  owners: ReservoirTopOwner[];
}
