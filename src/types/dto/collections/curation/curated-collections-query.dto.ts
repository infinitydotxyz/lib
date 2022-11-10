import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';
import { OrderDirection } from '../../../core/Queries';
import { parseIntTransformer } from '../../../../transformers/parse-int.transformer';
import { ChainId } from '../../../core';

export enum CuratedCollectionsOrderBy {
  Votes = 'votes',
  Apr = 'apr',
  Timestamp = 'timestamp'
}

export class CuratedCollectionsQuery {
  @ApiPropertyOptional({
    description: 'Chain id of the collections (defaults to mainnet)',
    enum: ChainId
  })
  chainId?: ChainId;

  @ApiProperty({ enum: CuratedCollectionsOrderBy })
  @IsEnum(CuratedCollectionsOrderBy)
  orderBy: CuratedCollectionsOrderBy;

  @ApiProperty({ enum: OrderDirection })
  @IsEnum(OrderDirection)
  orderDirection: OrderDirection;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  @Max(50)
  @Transform(parseIntTransformer())
  limit: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  cursor?: string;
}

export class CuratedCollectionsQueryWithUser extends CuratedCollectionsQuery {
  @ApiPropertyOptional()
  @IsOptional()
  user?: string;
}
