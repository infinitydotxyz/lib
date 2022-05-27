import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEthereumAddress, IsString } from 'class-validator';
import { IsSupportedChainId } from '../../../../decorators';
import { normalizeAddressTransformer } from '../../../../transformers';
import { ChainId } from '../../../core';

export class NftQueryDto {
  @ApiPropertyOptional({
    description: 'Collection Address'
  })
  @IsEthereumAddress({
    message: 'Invalid address'
  })
  @Transform(normalizeAddressTransformer)
  address!: string;

  @ApiProperty({
    description: 'Collection chain id',
    enum: ChainId
  })
  @IsSupportedChainId({
    message: 'Invalid chainId'
  })
  chainId!: ChainId;

  @ApiProperty({
    description: 'Token id of the nft to get'
  })
  @IsString()
  tokenId!: string;
}
