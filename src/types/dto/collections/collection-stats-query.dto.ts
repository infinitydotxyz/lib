import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnumArray } from '../../../decorators/is-enum-array.decorator';
import { arrayTransformer } from '../../../transformers/array-query.transformer';
import { StatsPeriod } from '../../core';

export class CollectionStatsQueryDto {
  @ApiProperty({
    description: 'Periods to get stats for',
    enum: StatsPeriod,
    type: [StatsPeriod]
  })
  @IsEnumArray(StatsPeriod, { message: 'Invalid periods' })
  @Transform(arrayTransformer)
  periods: StatsPeriod[];
}
