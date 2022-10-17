import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsEthereumAddress, IsString } from 'class-validator';
import { normalizeAddressTransformer } from '../../../transformers';
import { ChainId } from '../../core';

export class AssetReferralDto {
  @ApiProperty({
    description: 'The address of the user that referred the asset'
  })
  @IsEthereumAddress({
    message: 'Invalid address'
  })
  @Transform(normalizeAddressTransformer)
  referrer: string;

  @ApiProperty({
    description: 'The address of the asset that was referred'
  })
  @IsEthereumAddress({
    message: 'Invalid address'
  })
  @Transform(normalizeAddressTransformer)
  assetAddress: string;

  @ApiProperty({
    description: 'The chain id of the asset that was referred',
    enum: ChainId
  })
  @IsEnum(ChainId)
  chainId: ChainId;

  @ApiProperty({
    description: 'The token id of the asset that was referred'
  })
  @IsString()
  tokenId: string;
}
