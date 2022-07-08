import { ApiProperty, ApiPropertyOptional, PickType } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsArray, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { arrayTransformer, parseIntTransformer } from '../../../../transformers';
import { OrderDirection } from '../../../core';
import { PriceFilterDto } from './price-filter.dto';

export enum NftsOrderBy {
  RarityRank = 'rarityRank',
  TokenId = 'tokenId',
  TokenIdNumeric = 'tokenIdNumeric',
  Price = 'price'
}

export enum OrderType {
  Listing = 'listing',
  Offer = 'offer'
}

export class NftsQueryDto extends PickType(PriceFilterDto, ['minPrice', 'maxPrice', 'currency'] as const) {
  @ApiProperty({
    description: 'Property to order nfts by',
    enum: NftsOrderBy
  })
  @IsEnum(NftsOrderBy)
  orderBy!: NftsOrderBy;

  @ApiProperty({
    description: 'Direction to order by',
    enum: OrderDirection
  })
  @IsEnum(OrderDirection)
  orderDirection!: OrderDirection;

  @ApiProperty({
    description: 'Number of results to get. Max of 50'
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

  @ApiPropertyOptional({
    description: 'Trait types to filter by',
    type: [String]
  })
  @IsOptional()
  @IsArray()
  @Transform(arrayTransformer)
  traitTypes?: string[];

  @ApiPropertyOptional({
    description:
      'Trait values to filter by. Use commas for multiple values. Supply multiple values for a single trait by separating with a |',
    type: [String]
  })
  @IsOptional()
  @IsArray()
  @Transform(arrayTransformer)
  traitValues?: string[];

  @ApiPropertyOptional({
    description: 'Order type to include in the response',
    enum: OrderType
  })
  @IsOptional()
  @IsEnum(OrderType)
  orderType?: OrderType;
}
