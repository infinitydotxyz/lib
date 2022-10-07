import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean } from 'class-validator';
import { ChainId } from '../../../core';

/**
 * Encapsulates favorite collections data (for the leaderboard).
 */
export class CollectionFavoriteDto {
  @ApiProperty()
  @IsString()
  collectionChainId: string;

  @ApiProperty()
  @IsString()
  collectionAddress: string;

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

  @ApiProperty()
  phaseId: string;
}

/**
 * Encapsulates the current user-favorite collection.
 */
export class UserFavoriteDto extends CollectionFavoriteDto {
  @ApiProperty()
  userAddress: string;

  @ApiProperty({
    enum: ChainId
  })
  userChainId: ChainId;
}

export class CollectionFavoriteQueryResultDto {
  data: CollectionFavoriteDto[];
  cursor?: string;
  hasNextPage: boolean;
}
