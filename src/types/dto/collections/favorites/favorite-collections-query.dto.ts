import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';
import { ChainId } from '../../../core';
import { PaginatedQuery } from '../../common';

export enum FavoriteCollectionPhaseFilter {
  All = 'all',
  Current = 'current',
  Past = 'past'
}

export class FavoriteCollectionsQueryDto extends PaginatedQuery {
  @ApiPropertyOptional({
    description: 'Filter by phase',
    enum: FavoriteCollectionPhaseFilter,
    default: FavoriteCollectionPhaseFilter.All
  })
  @IsEnum(FavoriteCollectionPhaseFilter)
  @IsOptional()
  phase?: FavoriteCollectionPhaseFilter;

  @ApiPropertyOptional({
    description: 'Chain id',
    enum: ChainId,
    default: ChainId.Mainnet
  })
  @IsEnum(ChainId)
  @IsOptional()
  chainId?: ChainId;
}
