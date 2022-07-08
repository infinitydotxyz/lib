import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEthereumAddress, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { normalizeAddressTransformer } from '../../../transformers';
import { ChainId } from '../../core';
import { OBTokenInfoDto, OBTokenInfoWithoutMetadataDto } from './ob-token-info.dto';

export class OBOrderItemWithoutMetadataDto {
  @ApiProperty({
    description: 'Chain id'
  })
  @IsString()
  @IsNotEmpty()
  chainId: ChainId;

  @ApiProperty({
    description: 'Collection address'
  })
  @IsString()
  @IsNotEmpty()
  @IsEthereumAddress()
  @Transform(normalizeAddressTransformer)
  collectionAddress: string;

  @ApiProperty({
    description: 'Tokens in the order'
  })
  @ValidateNested({ each: true })
  @Type(() => OBTokenInfoWithoutMetadataDto)
  @IsArray()
  tokens: OBTokenInfoWithoutMetadataDto[];
}

export class OBOrderItemMetadataDto {
  @ApiProperty({
    description: 'Collection name'
  })
  @IsString()
  @IsNotEmpty()
  collectionName: string;

  @ApiProperty({
    description: 'Collection image'
  })
  @IsString()
  @IsNotEmpty()
  collectionImage: string;

  @ApiProperty({
    description: 'Collection slug'
  })
  @IsString()
  @IsNotEmpty()
  collectionSlug: string;

  @ApiProperty({
    description: 'Collection has blue check'
  })
  @IsBoolean()
  hasBlueCheck: boolean;
}

export class OBOrderItemDto extends IntersectionType(OBOrderItemWithoutMetadataDto, OBOrderItemMetadataDto) {
  @ApiProperty({
    description: 'Tokens in the order'
  })
  @ValidateNested({ each: true })
  @Type(() => OBTokenInfoDto)
  @IsArray()
  tokens: OBTokenInfoDto[];
}
