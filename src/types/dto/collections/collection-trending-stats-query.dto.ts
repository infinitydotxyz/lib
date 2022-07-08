import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { StatsPeriod } from '../../core';

export class CollectionTrendingStatsQueryDto {
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
}
