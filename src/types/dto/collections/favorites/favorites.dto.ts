import { ApiProperty, PickType } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean } from 'class-validator';
import { ChainId } from '../../../core';

/**
 * Encapsulates the current user-favorite collection.
 */
export class UserFavoriteDto {
  @ApiProperty()
  @IsString()
  collectionChainId: string;

  @ApiProperty()
  @IsString()
  collectionAddress: string;

  /**
   * Timestamp indiciating when this entry got created.
   */
  @ApiProperty()
  @IsNumber()
  timestamp: number;

  @ApiProperty()
  userAddress: string;

  @ApiProperty({
    enum: ChainId
  })
  userChainId: ChainId;
}

/**
 * Encapsulates favorite collections data (for the leaderboard).
 */
export class CollectionFavoriteDto extends PickType(UserFavoriteDto, ['collectionChainId', 'collectionAddress']) {
  /**
   * Timestamp indicating when this entry was modified.
   */
  @ApiProperty()
  @IsNumber()
  timestamp: number;

  /**
   * The total amount of times this collection was favorited by users (during the current epoch).
   */
  @ApiProperty()
  @IsNumber()
  numFavorites: number;

  @ApiProperty()
  @IsString()
  profileImage: string;

  @ApiProperty()
  @IsString()
  bannerImage: string;

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsBoolean()
  hasBlueCheck: boolean;

  @ApiProperty()
  slug: string;
}

export class CollectionFavoriteQueryResultDto {
  data: CollectionFavoriteDto[];
  cursor?: string;
  hasNextPage: boolean;
}
