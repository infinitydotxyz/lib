import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CuratedCollection } from '../../../core';
import { CollectionDto } from '../collection.dto';

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
