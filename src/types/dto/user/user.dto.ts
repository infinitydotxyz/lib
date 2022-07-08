import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEthereumAddress } from 'class-validator';
import { IsSupportedChainId } from '../../../decorators/is-supported-chain-id.decorator';
import { normalizeAddressTransformer } from '../../../transformers/normalize-address.transformer';
import { ChainId } from '../../core';

export class UserDto {
  @ApiProperty({
    description: 'User wallet address'
  })
  @IsEthereumAddress({
    message: 'Invalid address'
  })
  @Transform(normalizeAddressTransformer)
  readonly userAddress: string;

  @ApiProperty({
    description: 'Wallet chain id',
    enum: ChainId
  })
  @IsSupportedChainId({
    message: 'Invalid chainId'
  })
  readonly userChainId: ChainId;
}
