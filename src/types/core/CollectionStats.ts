import { SocialsStats } from './SocialsStats';
import { Stats } from './Stats';
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
}
