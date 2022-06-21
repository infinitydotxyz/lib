import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEthereumAddress, IsNumber } from 'class-validator';
import { normalizeAddressTransformer } from '../../../transformers';

export class TopOwnerDto {
  @ApiProperty({
    description: 'The address of the owner'
  })
  @IsEthereumAddress()
  @Transform(normalizeAddressTransformer)
  ownerAddress!: string;

  @ApiProperty({
    description: 'The number of nfts owned in the collection by this owner'
  })
  @IsNumber()
  ownedCount!: number;

  @ApiProperty({
    description: 'The percent of nfts owned by this owner in the collection'
  })
  @IsNumber()
  percentOwned!: number;

  @ApiProperty({
    description: 'The number of nfts in the collection'
  })
  @IsNumber()
  numNfts!: number;
}
