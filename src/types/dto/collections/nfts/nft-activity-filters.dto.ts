import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { IsEnumArray } from '../../../../decorators';
import { parseIntTransformer } from '../../../../transformers';
import { ActivityType } from './nft-activity.types';

export class NftActivityFiltersDto {
  @ApiProperty({
    description: 'Activity types to include in the response',
    enum: ActivityType,
    type: [ActivityType]
  })
  @IsEnumArray(ActivityType, { message: 'Invalid event type' })
  eventType!: ActivityType[];

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
