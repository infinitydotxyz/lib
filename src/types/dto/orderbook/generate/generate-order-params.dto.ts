import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsEthereumAddress,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  ValidateNested
} from 'class-validator';
import { normalizeAddressTransformer, parseIntTransformer } from '../../../../transformers';
import { ChainId } from '../../../core';
import { ChainNFTsDto } from '../../orders';

export enum GenerateOrderKind {
  Sell = 'sell',
  List = 'list',
  Buy = 'buy',
  Bid = 'bid'
}

export class GenerateOrder {
  @ApiProperty({ description: 'The kind of the order to generate' })
  @IsEnum(GenerateOrderKind)
  kind: GenerateOrderKind;

  @ApiProperty({
    description: 'Chain ID of the order',
    enum: ChainId
  })
  @IsEnum(ChainId)
  chainId: ChainId;

  @ApiProperty({
    description: 'Maker of the order'
  })
  @IsEthereumAddress({
    message: 'Invalid address'
  })
  @Transform(normalizeAddressTransformer)
  maker: string;
}

export class GenerateOrderParams extends GenerateOrder {
  @ApiProperty({ description: 'The kind of the order to generate' })
  @IsEnum(GenerateOrderKind)
  kind: GenerateOrderKind.List | GenerateOrderKind.Bid;

  @ApiProperty({
    description: 'Currency to use'
  })
  @IsEthereumAddress({
    message: 'Invalid address'
  })
  @Transform(normalizeAddressTransformer)
  currency: string;

  @ApiProperty({
    description: 'Num items'
  })
  @IsNumber({ allowNaN: false, allowInfinity: false })
  numItems: number;

  @ApiProperty({
    description: 'Start price (wei)'
  })
  @IsNumberString(undefined, { message: 'Invalid start price' })
  startPriceWei: string;

  @ApiProperty({
    description: 'End price (wei)'
  })
  @IsNumberString(undefined, { message: 'Invalid end price' })
  endPriceWei: string;

  @ApiProperty({
    description: 'Start time (ms)'
  })
  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Transform(parseIntTransformer())
  startTimeMs: number;

  @ApiProperty({
    description: 'End time (ms) - 0 is a special case to never expire'
  })
  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Transform(parseIntTransformer())
  endTimeMs: number;

  @ApiPropertyOptional({
    description: 'Nonce of the order'
  })
  @IsOptional()
  @IsNumberString(undefined, { message: 'Invalid nonce' })
  nonce?: string;

  @ApiProperty({
    description: 'NFTs in the order',
    type: [ChainNFTsDto]
  })
  @IsArray()
  @ValidateNested({ each: true, message: 'Invalid chain nft' })
  @Type(() => ChainNFTsDto)
  nfts: ChainNFTsDto[];
}

export class GenerateSellParams extends GenerateOrder {
  @ApiProperty({ description: 'The kind of the order to generate' })
  @IsEnum(GenerateOrderKind)
  kind: GenerateOrderKind.Sell;

  @ApiPropertyOptional({
    description: 'Nonce of the order'
  })
  @IsOptional()
  @IsNumberString(undefined, { message: 'Invalid nonce' })
  nonce?: string;

  @ApiProperty({
    description: 'Min price (wei)'
  })
  @IsNumberString(undefined, { message: 'Invalid min price' })
  minPriceWei: string;

  @ApiProperty({
    description: 'Order id to generate'
  })
  @IsString()
  orderId: string;

  @ApiPropertyOptional({
    description: 'Specific NFTs to sell - only required for subset and contract wide orders',
    type: [ChainNFTsDto]
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true, message: 'Invalid chain nft' })
  @Type(() => ChainNFTsDto)
  nfts?: ChainNFTsDto[];
}

export class GenerateBuyParams extends GenerateOrder {
  @ApiProperty({ description: 'The kind of the order to generate' })
  @IsEnum(GenerateOrderKind)
  kind: GenerateOrderKind.Buy;

  @ApiPropertyOptional({
    description: 'Nonce of the order'
  })
  @IsOptional()
  @IsNumberString(undefined, { message: 'Invalid nonce' })
  nonce?: string;

  @ApiProperty({
    description: 'Max price (wei)'
  })
  @IsNumberString(undefined, { message: 'Invalid max price' })
  maxPriceWei: string;

  @ApiProperty({
    description: 'Max gas price (wei)'
  })
  @IsOptional()
  @IsNumberString(undefined, { message: 'Invalid max gas price' })
  maxGasPriceWei?: string;

  @ApiProperty({
    description: 'Order id to generate'
  })
  @IsString()
  orderId: string;

  @ApiPropertyOptional({
    description: 'Specific NFTs to buy - only required for subset orders',
    type: [ChainNFTsDto]
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true, message: 'Invalid chain nft' })
  @Type(() => ChainNFTsDto)
  nfts?: ChainNFTsDto[];
}

export type GenerateParams = GenerateBuyParams | GenerateSellParams | GenerateOrderParams;
