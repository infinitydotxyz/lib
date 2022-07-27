import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsArray, IsEnum, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { parseIntTransformer } from '../../../transformers';
import { NftSale, NftSalesResponse, SaleSource, TokenStandard } from '../../core';

export class NftSaleDto implements NftSale {
  @ApiProperty({
    description: 'The chain ID of the sale'
  })
  @IsString()
  chainId: string;

  @ApiProperty({
    description: 'The transaction hash of the sale'
  })
  @IsString()
  txHash: string;

  @ApiProperty({
    description: 'The block number of the sale'
  })
  @IsNumber()
  blockNumber: number;

  @ApiProperty({
    description: 'The timestamp of the sale'
  })
  @IsNumber()
  timestamp: number;

  @ApiProperty({
    description: 'The collection address of the sale'
  })
  @IsString()
  collectionAddress: string;

  @ApiProperty({
    description: 'The token ID of the sale'
  })
  @IsString()
  tokenId: string;

  @ApiProperty({
    description: 'The price of the sale'
  })
  @IsNumber()
  price: number;

  @ApiProperty({
    description: 'The payment token of the sale'
  })
  @IsString()
  paymentToken: string;

  @ApiProperty({
    description: 'The buyer of the sale'
  })
  @IsString()
  buyer: string;

  @ApiProperty({
    description: 'The seller of the sale'
  })
  @IsString()
  seller: string;

  @ApiProperty({
    description: 'The quantity of the sale'
  })
  @IsNumber()
  quantity: number;

  @ApiProperty({
    description: 'The source of the sale'
  })
  @IsEnum(SaleSource)
  source: SaleSource;

  @ApiProperty({
    description: 'The NFT token type'
  })
  @IsEnum(TokenStandard)
  tokenStandard: TokenStandard;
}

export class NftSalesResponseDto implements NftSalesResponse {
  @ApiProperty({
    description: 'The list of sales'
  })
  @Type(() => NftSaleDto)
  @ValidateNested({ each: true })
  @IsArray()
  data: NftSaleDto[];

  @ApiPropertyOptional({
    description: 'The cursor of the next page'
  })
  @IsOptional()
  cursor: string | undefined;

  @ApiProperty({
    description: 'Whether there is a next page'
  })
  hasNextPage: boolean;
}

export class InfinitySalesQueryDto {
  @ApiProperty({
    description: 'Cursor for pagination'
  })
  @IsOptional()
  @IsString()
  cursor?: string;

  @ApiProperty({
    description: 'The number of sales to return. Max 100'
  })
  @IsOptional()
  @IsNumber()
  @Transform(parseIntTransformer({ max: 100 }))
  limit?: number;
}
