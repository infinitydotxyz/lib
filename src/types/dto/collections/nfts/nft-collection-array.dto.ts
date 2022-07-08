import { ApiProperty } from '@nestjs/swagger';
import { NftCollectionDto } from './nft-collection.dto';

export class NftCollectionArrayDto {
  @ApiProperty({ description: 'Array of nfts', type: [NftCollectionDto] })
  data: NftCollectionDto[];

  @ApiProperty({ description: 'Cursor that can be used to get the next page' })
  cursor: string;

  @ApiProperty({ description: 'Whether there are more results available' })
  hasNextPage: boolean;
}
