import { ChainId } from './ChainId';
import { SocialsStats } from './SocialsStats';
import { Stats } from './Stats';
import { StatsPeriod } from './StatsPeriod';
export interface CollectionStats extends Stats, SocialsStats {
  /**
   * Name of the collection
   */
  name: string;

  /**
   *Profile image of the collection
   */
  profileImage: string;

  /**
   *Whether the collection is verified
   */
  hasBlueCheck: boolean;

  /**
   *Chain id
   */
  chainId: ChainId;

  /**
   *Corresponding collection address
   */
  collectionAddress: string;

  /**
   *Number of owners of nfts in the collection
   */
  numOwners: number;

  /**
   *Number of nfts in the collection
   */
  numNfts: number;

  /**
   *Floor price
   */
  floorPrice: number;

  /**
   *Floor price for the previous period
   */
  prevFloorPrice: number;

  /**
   *Percent change between the previous period and this period
   */
  floorPricePercentChange: number;

  /**
   *Ceiling price
   */
  ceilPrice: number;

  /**
   *Ceiling price in the previous period
   */
  prevCeilPrice: number;

  /**
   *Percent change between the previous period and this period
   */
  ceilPricePercentChange: number;

  /**
   *Volume
   */
  volume: number;

  /**
   *Volume in the previous period
   */
  prevVolume: number;

  /**
   *Percent change between the previous period and this period
   */
  volumePercentChange: number;

  /**
   *Number of sales
   */
  numSales: number;

  /**
   *Number of sales in the previous period
   */
  prevNumSales: number;

  /**
   *Percent change between the previous period and this period
   */
  numSalesPercentChange: number;

  /**
   *Average price
   */
  avgPrice: number;

  /**
   *Average price in the previous period
   */
  prevAvgPrice: number;

  /**
   *Percent change between the previous period and this period
   */
  avgPricePercentChange: number;

  /**
   *Discord followers
   */
  discordFollowers: number;

  /**
   *Discord followers in the previous period
   */
  prevDiscordFollowers: number;

  /**
   *Percent change between the previous period and this period
   */
  discordFollowersPercentChange: number;

  /**
   *Discord presence
   */
  discordPresence: number;

  /**
   *Discord presence in the previous period
   */
  prevDiscordPresence: number;

  /**
   *Percent change between the previous period and this period
   */
  discordPresencePercentChange: number;

  /**
   *Guild id of the discord in the current period
   */
  guildId: string;
  /**
   *Discord invite in the current period
   */
  discordLink: string;

  /**
   *Twitter followers
   */
  twitterFollowers: number;

  /**
   *Twitter followers in the previous period
   */
  prevTwitterFollowers: number;

  /**
   *Percent change between the previous period and this period
   */
  twitterFollowersPercentChange: number;

  /**
   *Number of accounts being followed
   */
  twitterFollowing: number;

  /**
   *Number of accounts being followed in the previous period
   */
  prevTwitterFollowing: number;

  /**
   *Percent change between the previous period and this period
   */
  twitterFollowingPercentChange: number;

  /**
   *Twitter id of the account in the current period
   */
  twitterId: string;

  /**
   *Twitter handle of the account in the current period
   */
  twitterHandle: string;

  /**
   *Link to the twitter account in the current period
   */
  twitterLink: string;

  /**
   *Timestamp of the current period
   */
  timestamp: number;

  /**
   *Period of the current stats
   */
  period: StatsPeriod;

  /**
   *The number of votes for the collection
   */
  votesFor: number;

  /**
   *Number of votes against the collection
   */
  votesAgainst: number;

  /**
   *Timestamp that the stats were updated at
   */
  updatedAt: number;
}
