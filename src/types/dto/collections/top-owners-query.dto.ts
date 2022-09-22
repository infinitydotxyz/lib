import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';
import { PickTypeX } from '../../../utils';
import { OrderDirection } from '../../core';
import { PaginatedQuery } from '../common';

export class TopOwnersQueryDto extends PickTypeX(PaginatedQuery, ['cursor', 'limit'] as const) {
  @ApiPropertyOptional({
    description: 'Direction to order results by. Defaults to `desc`',
    enum: OrderDirection
  })
  @IsEnum(OrderDirection)
  @IsOptional()
  orderDirection?: OrderDirection;
}
