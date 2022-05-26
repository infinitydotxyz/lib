import { ApiProperty } from '@nestjs/swagger';
import { ChainId } from '../../../core';

export class NftCollectionDto {
  @ApiProperty({
    description: 'Collection address'
  })
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
  chainId!: ChainId;
}
