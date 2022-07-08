import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { normalizeAddressTransformer } from '../../../../transformers';
import { ChainId } from '../../../core';

export class NftCollectionDto {
  @ApiProperty({
    description: 'Collection address'
  })
  @Transform(normalizeAddressTransformer)
  collectionAddress?: string;

  @ApiProperty({
    description: 'Collection slug'
  })
  collectionSlug?: string;

  @ApiProperty({
    description: 'Collection name'
  })
  collectionName?: string;

  @ApiProperty({
    description: 'Whether the collection is verified'
  })
  hasBlueCheck?: boolean;

  @ApiProperty({
    description: 'Chain id that the collection is on'
  })
  chainId: ChainId;
}
