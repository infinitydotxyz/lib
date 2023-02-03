import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsEthereumAddress,
  IsNotEmpty,
  IsString,
  ValidateNested
} from 'class-validator';
import { BigNumberish } from 'ethers';
import { normalizeAddressTransformer } from '../../../transformers/normalize-address.transformer';
import { ChainOBOrder } from '../../core';
import { ChainNFTsDto } from './chain-nfts.dto';

export class ChainOBOrderDto implements ChainOBOrder {
  @ApiProperty({
    description: 'Order side (buy/sell)'
  })
  @IsBoolean()
  isSellOrder: boolean;

  @ApiProperty({
    description: 'Signer address'
  })
  @IsEthereumAddress()
  @Transform(normalizeAddressTransformer)
  signer: string;

  @ApiProperty({
    description:
      'Constraints. Num items, start price in wei, end price in wei, start time in seconds, \
        end time in seconds, nonce of the order, max tx gas price in wei and optionally isTrustedExec flag',
    type: [String]
  })
  @IsArray()
  @ArrayMinSize(7)
  @ArrayMaxSize(8)
  constraints: BigNumberish[];

  @ApiProperty({
    description: 'NFTs in the order',
    type: [ChainNFTsDto]
  })
  @IsArray()
  @ValidateNested({ each: true, message: 'Invalid chain nft' })
  @Type(() => ChainNFTsDto)
  nfts: ChainNFTsDto[];

  @ApiProperty({
    description: 'Exec params like currency address, complication address',
    type: [String]
  })
  @IsArray()
  execParams: string[];

  @ApiProperty({
    description: 'Encoded extra params',
    type: String
  })
  @IsString()
  extraParams: string;

  @ApiProperty({
    description: 'Order signature',
    type: String
  })
  @IsNotEmpty()
  @IsString()
  sig: string;
}
