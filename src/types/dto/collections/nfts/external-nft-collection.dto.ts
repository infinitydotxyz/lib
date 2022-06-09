import { ApiProperty } from '@nestjs/swagger';
import { NftCollectionDto } from './nft-collection.dto';

export class ExternalNftCollectionDto extends NftCollectionDto {
  @ApiProperty({
    description: 'Whether the collection is supported'
  })
  isSupported!: boolean;
}
