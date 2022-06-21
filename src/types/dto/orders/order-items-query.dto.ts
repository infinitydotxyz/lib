import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsEthereumAddress, IsNumber, IsOptional, IsString } from 'class-validator';
import { arrayTransformer } from '../../../transformers/array-query.transformer';
import { normalizeAddressArrayTransformer } from '../../../transformers/normalize-address.transformer';
import { parseBoolTransformer } from '../../../transformers/parse-bool.transformer';
import { parseIntTransformer } from '../../../transformers/parse-int.transformer';
import { roundNumberTransformer } from '../../../transformers/round-number.transformer';
import { GetOrderItemsQuery, OBOrderStatus, OrderDirection } from '../../core';

export enum OrderItemsOrderBy {
  Price = 'startPriceEth',
  StartTime = 'startTimeMs',
  EndTime = 'endTimeMs'
}

export class OrderItemsQueryDto implements Omit<GetOrderItemsQuery, 'chainId'> {
  //   @ApiPropertyOptional({
  //     description: 'The chain id to filter orders by'
  //   })
  //   @IsSupportedChainId()
  //   chainId?: ChainId;

  @ApiPropertyOptional({
    description: 'Filter by order id'
  })
  @IsString()
  @IsOptional()
  id?: string;

  @ApiPropertyOptional({
    description: 'Filter by order type'
  })
  @IsOptional()
  @Transform(parseBoolTransformer({ optional: true }))
  @IsBoolean()
  isSellOrder?: boolean;

  @ApiPropertyOptional({
    description: 'Order status to filter by',
    enum: OBOrderStatus
  })
  @IsOptional()
  @IsEnum(OBOrderStatus)
  orderStatus?: OBOrderStatus;

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
    description: 'Order quantity to filter by'
  })
  @IsOptional()
  @IsNumber()
  @Transform(parseIntTransformer({ optional: true }))
  numItems?: number;

  @ApiPropertyOptional({
    description: 'Collection addresses to filter by',
    type: [String]
  })
  @IsOptional()
  @Transform(arrayTransformer)
  @Transform(normalizeAddressArrayTransformer)
  @IsArray()
  @IsEthereumAddress({ each: true })
  collections?: string[];

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
  @Transform(parseIntTransformer({ max: 50 }))
  limit!: number;

  @ApiPropertyOptional({
    description: 'Parameter to order results by',
    enum: OrderItemsOrderBy
  })
  @IsOptional()
  @IsEnum(OrderItemsOrderBy)
  orderBy?: OrderItemsOrderBy;

  @ApiPropertyOptional({
    description: 'Direction to order results by',
    enum: OrderDirection
  })
  @IsOptional()
  @IsEnum(OrderDirection)
  orderByDirection?: OrderDirection;
}
