import { ApiPropertyOptional, ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional, IsNumber, IsString } from 'class-validator';
import { IsEnumArray } from '../../../decorators';
import { arrayTransformer, parseIntTransformer } from '../../../transformers';
import { ActivityType } from '../collections/nfts';

export class UserActivityQueryDto {
  @ApiPropertyOptional({
    description: 'Activity types to include in the response. By default all events will be included',
    enum: ActivityType,
    type: [ActivityType]
  })
  @IsEnumArray(ActivityType, { message: 'Invalid event type' })
  @Transform(arrayTransformer)
  @IsOptional()
  events?: ActivityType[];

  @ApiProperty({
    description: 'Max number of events to get. Max of 50'
  })
  @IsNumber()
  @Transform(parseIntTransformer({ max: 50 }))
  limit!: number;

  @ApiPropertyOptional({
    description: 'Cursor to start after'
  })
  @IsOptional()
  @IsString()
  cursor?: string;
}
