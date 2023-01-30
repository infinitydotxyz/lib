import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { parseIntTransformer } from '../../../transformers/parse-int.transformer';
import { HistoricalSalesTimeBucket } from '../../core';

export class CollectionHistoricalSalesQueryDto {
  @ApiProperty({
    description: 'Period to get stats for',
    enum: HistoricalSalesTimeBucket
  })
  @IsEnum(HistoricalSalesTimeBucket)
  period: HistoricalSalesTimeBucket;

  @ApiPropertyOptional({
    description: 'Number of data points to get'
  })
  @IsNumber()
  @IsOptional()
  @Transform(parseIntTransformer())
  limit: number;

  @ApiPropertyOptional({
    description: 'Cursor to start after'
  })
  @IsString()
  @IsOptional()
  cursor?: string;
}
