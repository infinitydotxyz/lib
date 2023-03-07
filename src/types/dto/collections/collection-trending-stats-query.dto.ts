import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { parseIntTransformer } from '../../../transformers';
import { ChainId, StatsPeriod } from '../../core';

export class CollectionTrendingStatsQueryDto {
  @ApiProperty({
    description: 'Chain id',
    enum: ChainId
  })
  @IsEnum(ChainId)
  @IsOptional()
  chainId?: ChainId;

  @ApiProperty({
    description: 'Period to get stats for',
    enum: StatsPeriod
  })
  @IsEnum(StatsPeriod)
  period: StatsPeriod;

  @ApiPropertyOptional({
    description: 'Query by field (for mnemonic queries). Example: by_sales_volume or by_avg_price.'
  })
  @IsString()
  @IsOptional()
  queryBy?: string;

  @ApiPropertyOptional({
    description: 'Number of results to get. Max of 50'
  })
  @IsNumber()
  @IsOptional()
  @Transform(parseIntTransformer({ max: 50 }))
  limit?: number;
}
