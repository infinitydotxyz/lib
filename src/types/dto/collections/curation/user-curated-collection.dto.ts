import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ChainId } from '../../../core';

export class UserCuratedCollectionDto {
  /**
   * Collection address.
   */
  @ApiProperty()
  address: string;

  /**
   * Collection chain id .
   */
  @ApiProperty({
    enum: ChainId
  })
  chainId: string;

  /**
   * Address of the staker contract providing the user votes.
   */
  @ApiProperty()
  stakerContractAddress: string;

  /**
   * ChainId of the staker contract providing the user votes.
   */
  @ApiProperty()
  stakerContractChainId: ChainId;

  /**
   * Address of the token contract the user is staking tokens from.
   */
  @ApiProperty()
  tokenContractAddress: string;

  /**
   * ChainId of the token contract the user is staking tokens from.
   */
  @ApiProperty()
  tokenContractChainId: ChainId;

  /**
   * The user who curated this collection.
   */
  curator: {
    address: string;
    votes: number;
    fees: number;
    feesAPR: number;
  };

  /**
   * Fees accrued in USD.
   */
  @ApiProperty()
  fees: number;

  /**
   * Fees APR as a percentage.
   */
  @ApiProperty()
  feesAPR: number;

  /**
   * Timestamp indicating when this collection was curated by the user.
   */
  @ApiProperty()
  timestamp: number;

  /**
   * Slug of the collection.
   */
  @ApiProperty()
  slug: string;

  /**
   * Total number of votes from curators.
   */
  numCuratorVotes: number;

  /**
   * Profile image URL of the collection.
   */
  profileImage: string;

  /**
   * Banner image URL of the collection.
   */
  bannerImage: string;

  /**
   * Name of the collection.
   */
  name: string;

  /**
   * whether the collection is verified.
   */
  hasBlueCheck: boolean;
}

export class UserCuratedCollectionsDto {
  @ApiProperty({ type: UserCuratedCollectionsDto, isArray: true })
  data: UserCuratedCollectionDto[];

  @ApiPropertyOptional()
  cursor?: string;

  @ApiProperty()
  hasNextPage: boolean;
}
