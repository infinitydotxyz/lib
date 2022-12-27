import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsString, IsOptional, IsBoolean, IsNumber, IsEnum } from 'class-validator';
import { parseBoolTransformer, parseIntTransformer, roundNumberTransformer } from '../../../transformers';
import { ChainId, OrderDirection } from '../../core';

export enum OrderBy {
  Price = 'price',
  StartTime = 'startTime',
  EndTime = 'endTime'
}

export enum OrderStatus {
  Active = 'active',
  Inactive = 'inactive',
  Filled = 'filled',
  Cancelled = 'cancelled',
  Expired = 'expired'
}

export enum Side {
  Maker = 'maker',
  Taker = 'taker'
}

export class BaseOrderQuery {
  @ApiPropertyOptional({
    description: 'Filter by order type'
  })
  @IsOptional()
  @Transform(parseBoolTransformer({ optional: true }))
  @IsBoolean()
  isSellOrder?: boolean;

  @ApiPropertyOptional({
    description: 'Min price to filter by'
  })
  @IsOptional()
  @IsNumber({
    maxDecimalPlaces: 18
  })
  @Transform(roundNumberTransformer(18))
  minPrice?: number;

  @ApiPropertyOptional({
    description: 'Max price to filter by'
  })
  @IsOptional()
  @IsNumber({
    maxDecimalPlaces: 18
  })
  @Transform(roundNumberTransformer(18))
  maxPrice?: number;

  @ApiPropertyOptional({
    description: 'Cursor to start after'
  })
  @IsString()
  @IsOptional()
  cursor?: string;

  @ApiProperty({
    description: 'Number of results to get. Max of 50'
  })
  @IsNumber()
  @IsOptional()
  @Transform(parseIntTransformer({ max: 50, optional: true }))
  limit?: number;

  @ApiPropertyOptional({
    description: 'Parameter to order results by',
    enum: OrderBy
  })
  @IsEnum(OrderBy)
  @IsOptional()
  orderBy?: OrderBy;

  @ApiPropertyOptional({
    description: 'Direction to order results by',
    enum: OrderDirection
  })
  @IsOptional()
  @IsEnum(OrderDirection)
  orderDirection?: OrderDirection;
}

export class CollectionOrdersQuery extends BaseOrderQuery {
  @ApiProperty({
    description: 'Order status to filter by'
  })
  @IsEnum(OrderStatus)
  status: OrderStatus;
}

export class TokenOrdersQuery extends CollectionOrdersQuery {
  @ApiProperty({
    description: 'Order status to filter by'
  })
  @IsEnum(OrderStatus)
  status: OrderStatus;
}

export class TakerOrdersQuery extends BaseOrderQuery {
  @ApiPropertyOptional({
    description: 'Chain Id of the orders to filter by. Defaults to mainnet'
  })
  @IsOptional()
  @IsEnum(ChainId)
  chainId?: ChainId;

  @ApiProperty({
    description: "Filter by user's role",
    enum: Side
  })
  @IsEnum(Side)
  side: Side.Taker;

  @ApiPropertyOptional({
    description: 'Order status to filter by'
  })
  @IsOptional()
  @IsEnum(OrderStatus)
  status: OrderStatus;
}

export class MakerOrdersQuery extends BaseOrderQuery {
  @ApiPropertyOptional({
    description: 'Chain Id of the orders to filter by. Defaults to mainnet'
  })
  @IsOptional()
  @IsEnum(ChainId)
  chainId?: ChainId;

  @ApiProperty({
    description: "Filter by user's role",
    enum: Side
  })
  @IsEnum(Side)
  side: Side.Maker;

  @ApiPropertyOptional({
    description: 'Order status to filter by'
  })
  @IsOptional()
  @IsEnum(OrderStatus)
  status?: OrderStatus;
}

export type OrderQueries = CollectionOrdersQuery | TokenOrdersQuery | TakerOrdersQuery | MakerOrdersQuery;
