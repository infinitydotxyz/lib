import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsString, IsOptional, IsEnum } from 'class-validator';
import { parseIntTransformer } from '../../../transformers/parse-int.transformer';
import { OrderDirection } from '../../core';

export class PaginatedQuery {
  @ApiProperty({
    description: 'Number of results to get. Max of 50'
  })
  @IsNumber()
  @Transform(parseIntTransformer({ max: 50 }))
  limit: number;

  @ApiPropertyOptional({
    description: 'Cursor to start after'
  })
  @IsString()
  @IsOptional()
  cursor?: string;

  @ApiPropertyOptional({
    description: 'Direction to order results by',
    enum: OrderDirection,
    default: 'desc'
  })
  @IsEnum(OrderDirection)
  @IsOptional()
  orderDirection?: OrderDirection;
}
