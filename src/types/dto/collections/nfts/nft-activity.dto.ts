import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsEthereumAddress, IsNumber, IsOptional, IsString } from 'class-validator';
import { normalizeAddressTransformer } from '../../../../transformers';
import { ChainId } from '../../../core';
import { FeedEventType } from '../../../core/feed';
export class NftActivity {
  @ApiProperty({
    description: 'Collection address'
  })
  @Transform(normalizeAddressTransformer)
  address!: string;

  @ApiProperty({
    description: 'Token id of the nft'
  })
  tokenId!: string;

  @ApiProperty({
    description: 'Chain id for the collection'
  })
  chainId!: ChainId;

  @ApiProperty({
    description: 'Activity type',
    enum: FeedEventType
  })
  @IsEnum(FeedEventType)
  type!: FeedEventType;

  @ApiProperty({
    description: 'Seller, offerer or lister address'
  })
  @IsEthereumAddress()
  @Transform(normalizeAddressTransformer)
  from!: string;

  @ApiPropertyOptional({
    description: 'Seller, offerer or lister display name'
  })
  @IsOptional()
  fromDisplayName?: string;

  @ApiPropertyOptional({
    description: 'Buyer or offeree address'
  })
  @IsEthereumAddress()
  @IsOptional()
  @Transform(normalizeAddressTransformer)
  to?: string;

  @ApiPropertyOptional({
    description: 'Buyer or offeree display name'
  })
  @IsString()
  @IsOptional()
  toDisplayName?: string;

  @ApiPropertyOptional({
    description: 'Sale, offer or listing amount'
  })
  @IsNumber()
  @IsOptional()
  price?: number;

  @ApiProperty({
    description: 'Sale, offer or listing payment token'
  })
  paymentToken!: string;

  @ApiPropertyOptional({
    description: 'Link to the nft'
  })
  @IsString()
  @IsOptional()
  internalUrl?: string;

  @ApiPropertyOptional({
    description: 'Link to transaction on etherscan'
  })
  @IsString()
  @IsOptional()
  externalUrl?: string;

  @ApiProperty({
    description: 'Epoch timestamp (ms) of the activity'
  })
  @IsNumber()
  timestamp!: number;
}
