import { ApiProperty } from '@nestjs/swagger/dist';
import { Transform, Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEnum, IsEthereumAddress, IsNumber, IsOptional, IsString } from 'class-validator';
import { normalizeAddressTransformer } from '../../../transformers/normalize-address.transformer';
import { Erc721Attribute, FirestoreOrderItem, OBOrderStatus, OrderSource } from '../../core';
import { Erc721AttributeDto } from '../collections/nfts';

export class FirestoreOrderItemDto implements FirestoreOrderItem {
  @ApiProperty({
    description: 'Unique id of the corresponding order'
  })
  @IsString()
  id: string;

  @ApiProperty({
    description: 'Status of the order',
    enum: OBOrderStatus
  })
  @IsEnum(OBOrderStatus)
  orderStatus: OBOrderStatus;

  @ApiProperty({
    description: 'Gas usage for the order'
  })
  @IsString()
  gasUsage: string;

  @ApiProperty({
    description: 'Source marketplace'
  })
  @IsString()
  source: OrderSource;

  @ApiProperty({
    description: 'Chain id for the order'
  })
  @IsString()
  chainId: string;

  @ApiProperty({
    description: 'Whether the order is a sell order (i.e. listing)'
  })
  @IsBoolean()
  isSellOrder: boolean;

  @ApiProperty({
    description: 'The quantity of this token to be exchanged'
  })
  @IsNumber()
  numItems: number;

  @ApiProperty({
    description: 'Starting price of the order in ETH'
  })
  @IsNumber()
  startPriceEth: number;

  @ApiProperty({
    description: 'Ending price of the order in ETH'
  })
  @IsNumber()
  endPriceEth: number;

  @ApiProperty({
    description: 'Gas for sniping in ETH'
  })
  @IsNumber()
  @IsOptional()
  gasCostEth: number;

  @ApiProperty({
    description: 'MP fee for sniping in ETH'
  })
  @IsNumber()
  @IsOptional()
  feeCostEth: number;

  @ApiProperty({
    description: 'Time that the order becomes valid. Epoch timestamp (ms)'
  })
  @IsNumber()
  startTimeMs: number;

  @ApiProperty({
    description: 'Time that the order is no longer valid after. Epoch timestamp (ms)'
  })
  @IsNumber()
  endTimeMs: number;

  @ApiProperty({
    description: 'The username of the maker of the order'
  })
  @IsString()
  makerUsername: string;

  @ApiProperty({
    description: 'The address of the maker of the order'
  })
  @IsString()
  @Transform(normalizeAddressTransformer)
  makerAddress: string;

  @ApiProperty({
    description: 'The username of the taker of the order'
  })
  @IsString()
  takerUsername: string;

  @ApiProperty({
    description: 'The address of the taker of the order'
  })
  @IsString()
  @Transform(normalizeAddressTransformer)
  takerAddress: string;

  @ApiProperty({
    description: 'Address of the corresponding collection'
  })
  @IsEthereumAddress()
  @Transform(normalizeAddressTransformer)
  collectionAddress: string;

  @ApiProperty({
    description: 'Name of the corresponding collection'
  })
  @IsString()
  collectionName: string;

  @ApiProperty({
    description: 'Profile image of the collection'
  })
  @IsString()
  collectionImage: string;

  @ApiProperty({
    description: 'Token id that this order item is for'
  })
  @IsString()
  tokenId: string;

  @ApiProperty({
    description: 'Name of the token'
  })
  @IsString()
  tokenName: string;

  @ApiProperty({
    description: 'Image for the token'
  })
  @IsString()
  tokenImage: string;

  @ApiProperty({
    description: 'Total number of tokens in the order'
  })
  @IsNumber()
  numTokens: number;

  @ApiProperty({
    description: 'Address of the currency token for the offer'
  })
  @Transform(normalizeAddressTransformer)
  @IsEthereumAddress()
  currencyAddress: string;

  @ApiProperty({
    description: 'Slug for the collection'
  })
  @IsString()
  collectionSlug: string;

  @ApiProperty({
    description: 'Whether the collection is verified'
  })
  @IsBoolean()
  hasBlueCheck: boolean;

  @ApiProperty({
    description: 'Slug for the token'
  })
  @IsString()
  tokenSlug: string;

  @ApiProperty({
    description: 'Complication address'
  })
  @Transform(normalizeAddressTransformer)
  @IsEthereumAddress()
  complicationAddress: string;

  @ApiProperty({
    description: 'NFT attributes'
  })
  @Type(() => Erc721AttributeDto)
  @IsArray()
  attributes: Erc721Attribute[];
}
