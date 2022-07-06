import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { IsEnumArray } from '../../../../decorators';
import { parseIntTransformer } from '../../../../transformers';
import { FeedEventType } from '../../../core/feed';

export class NftActivityFiltersDto {
  @ApiProperty({
    description: 'Activity types to include in the response',
    enum: FeedEventType,
    type: [FeedEventType]
  })
  @IsEnumArray(FeedEventType, { message: 'Invalid event type' })
  eventType!: FeedEventType[];

  @ApiProperty({
    description: 'Max number of events to get. Max of 50'
  })
  @IsNumber()
  @Transform(parseIntTransformer({ max: 50 }))
  limit!: number;

  @ApiPropertyOptional({
    description: 'Cursor to start after'
  })
  @IsString()
  @IsOptional()
  cursor?: string;
}
