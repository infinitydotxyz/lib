import { ApiProperty } from '@nestjs/swagger/dist';
import { Transform } from 'class-transformer';
import { IsBoolean, IsEnum, IsEthereumAddress, IsNumber, IsString } from 'class-validator';
import { normalizeAddressTransformer } from '../../../transformers/normalize-address.transformer';
import { FirestoreOrderItem, OBOrderStatus } from '../../core';

export class FirestoreOrderItemDto implements FirestoreOrderItem {
  @ApiProperty({
    description: 'Unique id of the corresponding order'
  })
  @IsString()
  id!: string;

  @ApiProperty({
    description: 'Status of the order',
    enum: OBOrderStatus
  })
  @IsEnum(OBOrderStatus)
  orderStatus!: OBOrderStatus;

  @ApiProperty({
    description: 'Chain id for the order'
  })
  @IsString()
  chainId!: string;

  @ApiProperty({
    description: 'Whether the order is a sell order (i.e. listing)'
  })
  @IsBoolean()
  isSellOrder!: boolean;

  @ApiProperty({
    description: 'The quantity of this token to be exchanged'
  })
  @IsNumber()
  numItems!: number;

  @ApiProperty({
    description: 'Starting price of the order in ETH'
  })
  @IsNumber()
  startPriceEth!: number;

  @ApiProperty({
    description: 'Ending price of the order in ETH'
  })
  @IsNumber()
  endPriceEth!: number;

  @ApiProperty({
    description: 'Time that the order becomes valid. Epoch timestamp (ms)'
  })
  @IsNumber()
  startTimeMs!: number;

  @ApiProperty({
    description: 'Time that the order is no longer valid after. Epoch timestamp (ms)'
  })
  @IsNumber()
  endTimeMs!: number;

  @ApiProperty({
    description: 'The username of the maker of the order'
  })
  @IsString()
  makerUsername!: string;

  @ApiProperty({
    description: 'The address of the maker of the order'
  })
  @IsString()
  makerAddress!: string;

  @ApiProperty({
    description: 'The username of the taker of the order'
  })
  @IsString()
  takerUsername!: string;

  @ApiProperty({
    description: 'The address of the taker of the order'
  })
  @IsString()
  takerAddress!: string;

  @ApiProperty({
    description: 'Address of the corresponding collection'
  })
  @IsEthereumAddress()
  collectionAddress!: string;

  @ApiProperty({
    description: 'Name of the corresponding collection'
  })
  @IsString()
  collectionName!: string;

  @ApiProperty({
    description: 'Profile image of the collection'
  })
  @IsString()
  collectionImage!: string;

  @ApiProperty({
    description: 'Token id that this order item is for'
  })
  @IsString()
  tokenId!: string;

  @ApiProperty({
    description: 'Name of the token'
  })
  @IsString()
  tokenName!: string;

  @ApiProperty({
    description: 'Image for the token'
  })
  @IsString()
  tokenImage!: string;

  @ApiProperty({
    description: 'Total number of tokens in the order'
  })
  @IsNumber()
  numTokens!: number;

  @ApiProperty({
    description: 'Address of the currency token for the offer'
  })
  @Transform(normalizeAddressTransformer)
  @IsEthereumAddress()
  currencyAddress!: string;

  @ApiProperty({
    description: 'Slug for the collection'
  })
  @IsString()
  collectionSlug!: string;

  @ApiProperty({
    description: 'Whether the collection is verified'
  })
  @IsBoolean()
  hasBlueCheck!: boolean;

  @ApiProperty({
    description: 'Slug for the token'
  })
  @IsString()
  tokenSlug!: string;

  @ApiProperty({
    description: 'Complication address'
  })
  @Transform(normalizeAddressTransformer)
  @IsEthereumAddress()
  complicationAddress: string;
}
