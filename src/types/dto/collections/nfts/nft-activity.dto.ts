import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsEthereumAddress, IsNumber, IsOptional, IsString } from 'class-validator';
import { normalizeAddressTransformer } from '../../../../transformers';
import { ChainId } from '../../../core';
import { EventType } from '../../../core/feed';
export class NftActivity {
  @ApiProperty({
    description: 'Firestore id'
  })
  id: string;

  @ApiProperty({
    description: 'Collection address'
  })
  @Transform(normalizeAddressTransformer)
  address: string;

  @ApiProperty({
    description: 'Token id of the nft'
  })
  tokenId: string;

  @ApiProperty({
    description: 'Collection name'
  })
  collectionName: string;

  @ApiProperty({
    description: 'Collection slug'
  })
  collectionSlug: string;

  @ApiProperty({
    description: 'Chain id for the collection'
  })
  chainId: ChainId;

  @ApiProperty({
    description: 'Activity type',
    enum: EventType
  })
  @IsEnum(EventType)
  type: EventType;

  @ApiProperty({
    description: 'Seller, offerer or lister address'
  })
  @IsEthereumAddress()
  @Transform(normalizeAddressTransformer)
  from: string;

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
  paymentToken: string;

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

  @ApiPropertyOptional({
    description: 'Image for the nft/collection'
  })
  @IsString()
  @IsOptional()
  image?: string;

  @ApiProperty({
    description: 'Epoch timestamp (ms) of the activity'
  })
  @IsNumber()
  timestamp: number;

  @ApiProperty({
    description: 'likes count'
  })
  @IsNumber()
  likes: number;

  @ApiProperty({
    description: 'comments count'
  })
  @IsNumber()
  comments: number;
}
