import { ChainId } from './ChainId';
import { StatsPeriod } from './StatsPeriod';

export enum StatType {
  FloorPrice = 'floorPrice',
  FloorPriceChange = 'floorPricePercentChange',

  CeilPrice = 'ceilPrice',
  CeilPriceChange = 'ceilPricePercentChange',

  Volume = 'volume',
  VolumeChange = 'volumePercentChange',

  Sales = 'numSales',
  SalesChange = 'numSalesPercentChange',

  AveragePrice = 'avgPrice',
  AveragePriceChange = 'avgPricePercentChange',

  DiscordFollowers = 'discordFollowers',
  DiscordFollowersPercentChange = 'discordFollowersPercentChange',

  DiscordPresence = 'discordPresence',
  DiscordPresencePercentChange = 'discordFollowersPercentChange',

  TwitterFollowers = 'twitterFollowers',
  TwitterFollowersPercentChange = 'twitterFollowersPercentChange'
}

export interface PreAggregatedSocialsStats {
  chainId: ChainId;
  collectionAddress: string;

  discordFollowers: number | null;
  discordPresence: number | null;
  guildId: string | null;
  discordLink: string | null;

  twitterFollowers: number | null;
  twitterFollowing: number | null;
  twitterId: string | null;
  twitterHandle: string | null;
  twitterLink: string | null;

  updatedAt: number;
}

export interface SocialsStats extends PreAggregatedSocialsStats {
  prevDiscordFollowers: number;
  discordFollowersPercentChange: number;

  prevDiscordPresence: number;
  discordPresencePercentChange: number;

  prevTwitterFollowers: number;
  twitterFollowersPercentChange: number;

  prevTwitterFollowing: number;
  twitterFollowingPercentChange: number;

  timestamp: number;
  period: StatsPeriod;
}
