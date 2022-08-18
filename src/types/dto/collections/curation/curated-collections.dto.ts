import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ChainId } from '../../../core';

export class CuratedCollectionDto {
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
   * Address of the user who curated this collection.
   */
  @ApiProperty()
  userAddress: string;

  /**
   * User chain id.
   */
  @ApiProperty({
    enum: ChainId
  })
  userChainId: ChainId;

  /**
   * Amount of user votes.
   */
  @ApiProperty()
  votes: number;

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
   *
   * This value is a copy of `collection.numCuratorVotes`, see {@link CollectionDto}.
   * It's only store here again to achieve performant reads.
   */
  numCuratorVotes: number;

  /**
   * Profile image URL of the collection.
   */
  profileImage: string;

  /**
   * Name of the collection.
   */
  name: string;
}

export class CuratedCollectionsDto {
  @ApiProperty({ type: CuratedCollectionsDto, isArray: true })
  data: CuratedCollectionDto[];

  @ApiPropertyOptional()
  cursor?: string;

  @ApiProperty()
  hasNextPage: boolean;
}
