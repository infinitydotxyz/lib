import { ApiPropertyOptional } from '@nestjs/swagger';
import { PickType } from '@nestjs/mapped-types';

import { IsEnum, IsOptional } from 'class-validator';
import { OrderDirection } from '../../core';
import { PaginatedQuery } from '../common';

export class TopOwnersQueryDto extends PickType(PaginatedQuery, ['cursor', 'limit'] as const) {
  @ApiPropertyOptional({
    description: 'Direction to order results by. Defaults to `desc`',
    enum: OrderDirection
  })
  @IsEnum(OrderDirection)
  @IsOptional()
  orderDirection?: OrderDirection;
}
