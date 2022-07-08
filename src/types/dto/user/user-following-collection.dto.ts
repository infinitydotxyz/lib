import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsEthereumAddress } from 'class-validator';
import { normalizeAddressTransformer } from '../../../transformers';
import { ChainId } from '../../core';

export class UserFollowingCollection {
  @ApiProperty({
    description: 'Address of the following collection'
  })
  @IsEthereumAddress()
  @Transform(normalizeAddressTransformer)
  collectionAddress: string;

  @ApiProperty({
    description: 'Chain id of the following collection',
    enum: ChainId
  })
  @IsEnum(ChainId)
  collectionChainId: ChainId;
}
