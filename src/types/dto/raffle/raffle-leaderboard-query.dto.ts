import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { parseIntTransformer } from '../../../transformers';
import { OrderDirection } from '../../core';
import { RaffleQueryDto } from './raffle-query.dto';

export class RaffleLeaderboardQueryDto extends RaffleQueryDto {
  @ApiPropertyOptional({
    description: 'Cursor used to get the next page of results'
  })
  @IsOptional()
  @IsString()
  cursor?: string;

  @ApiPropertyOptional({
    description: 'The direction to order thee results',
    enum: OrderDirection
  })
  @IsOptional()
  @IsEnum(OrderDirection)
  orderDirection?: OrderDirection;

  @ApiProperty({
    description: 'The number of results to return'
  })
  @IsNumber({
    allowNaN: false,
    allowInfinity: false
  })
  @Transform(parseIntTransformer({ max: 50, min: 1 }))
  limit: number;
}
