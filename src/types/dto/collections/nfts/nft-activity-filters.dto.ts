import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, IsBoolean } from 'class-validator';
import { Transform } from 'class-transformer';
import { IsEnumArray } from '../../../../decorators';
import { parseIntTransformer } from '../../../../transformers';
import { EventType } from '../../../core/feed';
import { SaleSource } from '../../../core';

export class NftActivityFiltersDto {
  @ApiProperty({
    description: 'Activity types to include in the response',
    enum: EventType,
    type: [EventType]
  })
  @IsEnumArray(EventType, { message: 'Invalid event type' })
  eventType: EventType[];

  @ApiProperty({
    description: 'Max number of events to get. Max of 50'
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
    description: 'SaleSource: INFINITY, etc'
  })
  @IsBoolean()
  @IsOptional()
  source?: SaleSource;
}
