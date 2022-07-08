import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { normalizeAddressTransformer } from '../../../transformers';
import { Erc721Attribute } from '../../core';

export class OBTokenInfoWithoutMetadataDto {
  @ApiProperty({
    description: 'Token Id'
  })
  @IsString()
  @IsNotEmpty()
  tokenId: string;

  @ApiProperty({
    description: 'No. of tokens. 1 for ERC721, >=1 for ERC1155'
  })
  @IsNumber()
  @IsNotEmpty()
  numTokens: number;
}

export class OBTokenInfoDto extends OBTokenInfoWithoutMetadataDto {
  @ApiProperty({
    description: 'Token name'
  })
  @IsString()
  tokenName: string;

  @ApiProperty({
    description: 'Image url'
  })
  @IsString()
  @IsNotEmpty()
  tokenImage: string;

  @ApiProperty({
    description: 'Taker username'
  })
  @IsString()
  takerUsername: string;

  @ApiProperty({
    description: 'Taker address'
  })
  @IsString()
  @Transform(normalizeAddressTransformer)
  takerAddress: string;

  @ApiProperty({
    description: 'NFT attributes'
  })
  @IsArray()
  attributes: Erc721Attribute[];
}
