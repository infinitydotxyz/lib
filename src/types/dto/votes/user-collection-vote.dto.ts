import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsEnum, IsEthereumAddress, IsNumber } from 'class-validator';
import { normalizeAddressTransformer } from '../../../transformers';
import { ChainId } from '../../core';

export class UserCollectionVoteDto {
  @ApiProperty({
    description: "User's wallet address"
  })
  @IsEthereumAddress()
  @Transform(normalizeAddressTransformer)
  userAddress!: string;

  @ApiProperty({
    description: "Chain id of the user's wallet",
    enum: ChainId
  })
  @IsEnum(ChainId)
  userChainId!: ChainId;

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
    description: 'Whether the user voted for or against the prompt'
  })
  @IsBoolean()
  votedFor!: boolean;

  @ApiProperty({
    description: 'Epoch timestamp (ms) that the vote was cast'
  })
  @IsNumber()
  updatedAt!: number;
}
