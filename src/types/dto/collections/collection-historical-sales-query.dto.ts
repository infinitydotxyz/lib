import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { parseIntTransformer } from '../../../transformers/parse-int.transformer';

export enum HistoricalSalesTimeBucket {
  ONE_HOUR = '1h',
  ONE_DAY = '1d',
  ONE_WEEK = '7d',
  ONE_MONTH = '30d',
  ONE_YEAR = '1y'
}

export class CollectionHistoricalSalesQueryDto {
  @ApiProperty({
    description: 'Period to get stats for',
    enum: HistoricalSalesTimeBucket
  })
  @IsEnum(HistoricalSalesTimeBucket)
  period: HistoricalSalesTimeBucket;

  @ApiProperty({
    description: 'Number of data points to get'
  })
  @IsNumber()
  @Transform(parseIntTransformer())
  limit: number;

  @ApiPropertyOptional({
    description: 'Cursor to start after'
  })
  @IsString()
  @IsOptional()
  cursor?: string;
}
