import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEthereumAddress, IsEnum, IsNumber } from 'class-validator';
import { normalizeAddressTransformer } from '../../../transformers';
import { ChainId } from '../../core';

export class CollectionVotesDto {
  @ApiProperty({
    description: 'Address of the collection being voted on'
  })
  @IsEthereumAddress()
  @Transform(normalizeAddressTransformer)
  collectionAddress!: string;

  @ApiProperty({
    description: 'Chain id of the collection being voted on',
    enum: ChainId
  })
  @IsEnum(ChainId)
  collectionChainId!: ChainId;

  @ApiProperty({
    description: 'The number of votes for the collection'
  })
  @IsNumber()
  votesFor!: number;

  @ApiProperty({
    description: 'The number of votes against the collection'
  })
  @IsNumber()
  votesAgainst!: number;
}
