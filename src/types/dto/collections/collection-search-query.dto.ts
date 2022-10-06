import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { parseIntTransformer } from '../../../transformers/parse-int.transformer';
import { ChainId } from '../../core';

export class CollectionSearchQueryDto {
  @ApiProperty({
    description: 'The value to be searched for'
  })
  @IsString()
  @IsOptional()
  query?: string;

  @ApiPropertyOptional({
    description: 'The chain id to filter by',
    enum: ChainId
  })
  @IsEnum(ChainId)
  @IsOptional()
  chainId?: ChainId;

  @ApiProperty({
    description: 'Number of results to get. Max of 100'
  })
  @IsNumber()
  @Transform(parseIntTransformer({ max: 100 }))
  limit: number;

  @ApiPropertyOptional({
    description: 'Cursor to start after'
  })
  @IsString()
  @IsOptional()
  cursor?: string;
}
