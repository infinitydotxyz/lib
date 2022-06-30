import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CuratedCollection } from '../../../core';

export class CuratedCollectionDto implements CuratedCollection {
  @ApiProperty()
  collectionAddress: string;

  @ApiProperty()
  collectionChainId: string;

  @ApiProperty()
  userAddress: string;

  @ApiProperty()
  userChainId: string;

  @ApiProperty()
  votes: number;

  @ApiProperty()
  fees: number;

  @ApiProperty()
  feesAPR: number;
}

export class CuratedCollectionsDto {
  @ApiProperty({ type: CuratedCollectionDto })
  data: CuratedCollectionDto[];

  @ApiPropertyOptional()
  cursor?: string;

  @ApiProperty()
  hasNextPage: boolean;
}
