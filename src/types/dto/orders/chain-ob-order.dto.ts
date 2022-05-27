import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEthereumAddress, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { BigNumberish, BytesLike } from 'ethers';
import { normalizeAddressTransformer } from '../../../transformers/normalize-address.transformer';
import { ChainOBOrder } from '../../core';
import { ChainNFTsDto } from './chain-nfts.dto';

export class ChainOBOrderDto implements ChainOBOrder {
  @ApiProperty({
    description: 'Order side (buy/sell)'
  })
  @IsBoolean()
  isSellOrder!: boolean;

  @ApiProperty({
    description: 'Signer address'
  })
  @IsEthereumAddress()
  @Transform(normalizeAddressTransformer)
  signer!: string;

  @ApiProperty({
    description: 'Constraints like num items, prices, times',
    type: [String]
  })
  @IsArray()
  constraints!: BigNumberish[];

  @ApiProperty({
    description: 'NFTs in the order',
    type: [ChainNFTsDto]
  })
  @IsArray()
  @ValidateNested({ each: true, message: 'Invalid chain nft' })
  @Type(() => ChainNFTsDto)
  nfts!: ChainNFTsDto[];

  @ApiProperty({
    description: 'Exec params like currency address, complication address',
    type: [String]
  })
  @IsArray()
  execParams!: string[];

  @ApiProperty({
    description: 'Encoded extra params',
    type: String
  })
  @IsString()
  extraParams!: BytesLike;

  @ApiProperty({
    description: 'Order signature',
    type: String
  })
  @IsNotEmpty()
  @IsString()
  sig!: BytesLike;
}
