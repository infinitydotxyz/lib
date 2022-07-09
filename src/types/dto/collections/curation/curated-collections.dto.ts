import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CollectionDto } from '../collection.dto';

export class CuratedCollectionDto {
  /**
   * Collection address.
   */
  @ApiProperty()
  collectionAddress: string;

  /**
   * Collection chain id .
   */
  @ApiProperty()
  collectionChainId: string;

  /**
   * Address of the user who curated this collection.
   */
  @ApiProperty()
  userAddress: string;

  /**
   * User chain id.
   */
  @ApiProperty()
  userChainId: string;

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
}

export class CuratedCollectionsDataDto {
  @ApiProperty({ type: CollectionDto })
  collections: CollectionDto[];

  @ApiProperty({ type: CuratedCollectionDto })
  curations: CuratedCollectionDto[];
}

export class CuratedCollectionsDto {
  @ApiProperty({ type: CuratedCollectionsDataDto })
  data: CuratedCollectionsDataDto;

  @ApiPropertyOptional()
  cursor?: string;

  @ApiProperty()
  hasNextPage: boolean;
}
