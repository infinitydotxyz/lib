import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEthereumAddress } from 'class-validator';
import { normalizeAddressTransformer } from '../../../transformers';
import { ChainId, CollectionStats, StatsPeriod, TopOwner } from '../../core';

export class CollectionStatsDto implements CollectionStats {
  @ApiProperty({ description: 'Name of the collection' })
  name: string;

  @ApiProperty({
    description: 'Profile image of the collection'
  })
  profileImage: string;

  @ApiProperty({
    description: 'Banner image for the collection'
  })
  bannerImage: string;

  @ApiProperty({
    description: 'The slug for the collection'
  })
  slug: string;

  @ApiProperty({
    description: 'Whether the collection is verified'
  })
  hasBlueCheck: boolean;

  @ApiProperty({ description: 'Chain id' })
  chainId: ChainId;

  @ApiProperty({ description: 'Corresponding collection address' })
  @IsEthereumAddress()
  @Transform(normalizeAddressTransformer)
  collectionAddress: string;

  @ApiProperty({
    description: 'Number of owners of nfts in the collection'
  })
  numOwners: number | null;

  @ApiProperty({
    description: 'Number of nfts in the collection'
  })
  numNfts: number | null;

  @ApiProperty({ description: 'Floor price' })
  floorPrice: number;

  @ApiProperty({ description: 'Floor price for the previous period' })
  prevFloorPrice: number | null;

  @ApiProperty({ description: 'Percent change between the previous period and this period' })
  floorPricePercentChange: number | null;

  @ApiProperty({ description: 'Ceiling price' })
  ceilPrice: number;

  @ApiProperty({ description: 'Ceiling price in the previous period' })
  prevCeilPrice: number | null;

  @ApiProperty({ description: 'Percent change between the previous period and this period' })
  ceilPricePercentChange: number | null;

  @ApiProperty({ description: 'Volume' })
  volume: number;

  @ApiProperty({ description: 'Volume in the previous period' })
  prevVolume: number | null;

  @ApiProperty({ description: 'Percent change between the previous period and this period' })
  volumePercentChange: number | null;

  @ApiProperty({ description: 'Number of sales' })
  numSales: number;

  @ApiProperty({ description: 'Number of sales in the previous period' })
  prevNumSales: number | null;

  @ApiProperty({ description: 'Percent change between the previous period and this period' })
  numSalesPercentChange: number | null;

  @ApiProperty({ description: 'Average price' })
  avgPrice: number;

  @ApiProperty({ description: 'Average price in the previous period' })
  prevAvgPrice: number | null;

  @ApiProperty({ description: 'Percent change between the previous period and this period' })
  avgPricePercentChange: number | null;

  @ApiProperty({ description: 'Discord followers' })
  discordFollowers: number | null;

  @ApiProperty({ description: 'Discord followers in the previous period' })
  prevDiscordFollowers: number | null;

  @ApiProperty({ description: 'Percent change between the previous period and this period' })
  discordFollowersPercentChange: number | null;

  @ApiProperty({ description: 'Discord presence' })
  discordPresence: number | null;

  @ApiProperty({ description: 'Discord presence in the previous period' })
  prevDiscordPresence: number | null;

  @ApiProperty({ description: 'Percent change between the previous period and this period' })
  discordPresencePercentChange: number | null;

  @ApiProperty({ description: 'Guild id of the discord in the current period' })
  guildId: string | null;
  @ApiProperty({ description: 'Discord invite in the current period' })
  discordLink: string | null;

  @ApiProperty({ description: 'Twitter followers' })
  twitterFollowers: number | null;

  @ApiProperty({ description: 'Twitter followers in the previous period' })
  prevTwitterFollowers: number | null;

  @ApiProperty({ description: 'Percent change between the previous period and this period' })
  twitterFollowersPercentChange: number | null;

  @ApiProperty({ description: 'Number of accounts being followed' })
  twitterFollowing: number | null;

  @ApiProperty({ description: 'Number of accounts being followed in the previous period' })
  prevTwitterFollowing: number | null;

  @ApiProperty({ description: 'Percent change between the previous period and this period' })
  twitterFollowingPercentChange: number | null;

  @ApiProperty({ description: 'Twitter id of the account in the current period' })
  twitterId: string | null;

  @ApiProperty({ description: 'Twitter handle of the account in the current period' })
  twitterHandle: string | null;

  @ApiProperty({ description: 'Link to the twitter account in the current period' })
  twitterLink: string | null;

  @ApiProperty({ description: 'Timestamp of the current period' })
  timestamp: number;

  @ApiProperty({ description: 'Period of the current stats' })
  period: StatsPeriod;

  @ApiProperty({ description: 'Timestamp that the social stats were updated at' })
  socialStatsUpdatedAt: number;

  @ApiProperty({ description: 'Timestamp that the stats were updated at' })
  updatedAt: number;

  @ApiProperty({
    description: "Min protocol fee paid for any sale in the collection's period"
  })
  minProtocolFeeWei: string | null;

  @ApiProperty({
    description: "Max protocol fee paid for any sale in the collection's period"
  })
  maxProtocolFeeWei: string | null;

  @ApiProperty({
    description: "Average protocol fee paid for all sales in the collection's period that include a protocol fee"
  })
  avgProtocolFeeWei: string | null;

  @ApiProperty({
    description: "Sum of all protocol fees paid for all sales in the collection's period"
  })
  sumProtocolFeeWei: string;

  @ApiProperty({
    description: 'The number of sales that include a protocol fee'
  })
  numSalesWithProtocolFee: number;

  @ApiProperty({
    description: "Sum of all protocol fees paid for all sales in the collection's period in ether"
  })
  sumProtocolFeeEth: number | null;

  @ApiProperty({
    description: 'Volume for the collection in USDC'
  })
  volumeUSDC: number | null;

  @ApiProperty({
    description: 'Top owners for the collection'
  })
  topOwnersByOwnedNftsCount: TopOwner[];

  // @ApiProperty({ description: 'Collection details (optional)' })
  // @IsOptional()
  // collectionData: Partial<CollectionDto>;
}
