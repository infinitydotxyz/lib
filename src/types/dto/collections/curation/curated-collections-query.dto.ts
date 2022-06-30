import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsArray, IsEnum, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { OrderDirection } from '../../../core/Queries';
import { parseIntTransformer } from '../../../../transformers/parse-int.transformer';

export enum CuratedCollectionsOrderBy {
  Votes = 'votes',
  AprHighToLow = 'apr_high_to_low',
  AprLowToHigh = 'apr_low_to_high'
}

export class CuratedCollectionsQuery {
  @ApiProperty({ enum: CuratedCollectionsOrderBy })
  @IsEnum(CuratedCollectionsOrderBy)
  orderBy: CuratedCollectionsOrderBy;

  @ApiProperty({ enum: OrderDirection })
  @IsEnum(OrderDirection)
  orderDirection: OrderDirection;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  @Transform(parseIntTransformer())
  limit: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  cursor?: string;

  @ApiPropertyOptional({
    description: 'Optional list of collection ids to filter by'
  })
  @IsOptional()
  @IsArray()
  collections?: string[];
}
