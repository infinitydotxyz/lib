import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';
import { ChainId } from '../../../core';
import { PaginatedQuery } from '../../common';

export class FavoriteCollectionsQueryDto extends PaginatedQuery {
  @ApiPropertyOptional({
    description: 'Chain id',
    enum: ChainId,
    default: ChainId.Mainnet
  })
  @IsEnum(ChainId)
  @IsOptional()
  chainId?: ChainId;
}
