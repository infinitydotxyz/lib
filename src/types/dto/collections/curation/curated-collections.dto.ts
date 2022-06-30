import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { CuratedCollection } from '../../../core';

export class CuratedCollectionsDto {
  @ApiProperty()
  data: CuratedCollection[];

  @ApiPropertyOptional()
  cursor?: string;

  @ApiProperty()
  hasNextPage: boolean;
}
