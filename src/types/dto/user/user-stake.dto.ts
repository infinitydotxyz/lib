import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsEthereumAddress, IsNumber } from 'class-validator';
import { normalizeAddressTransformer } from '../../../transformers';
import { ChainId, StakeInfo } from '../../core';

export class UserStakeDto {
  @ApiProperty({
    description: 'Contract address of the relevant staker contract'
  })
  @IsEthereumAddress({
    message: 'Invalid address'
  })
  @Transform(normalizeAddressTransformer)
  stakerContractAddress: string;

  @ApiProperty({
    description: 'Chain id of the relevant staker contract'
  })
  @IsEnum(ChainId)
  stakerContractChainId: ChainId;

  @ApiProperty({
    description: "User's amount for each stake duration"
  })
  stakeInfo: StakeInfo;

  @ApiProperty({
    description: "User's stake power. i.e. the number of votes the user has available to them"
  })
  @IsNumber()
  stakePower: number;

  @ApiProperty({
    description: "The block number of the last block that updated the user's stake"
  })
  @IsNumber()
  blockUpdatedAt: number;

  @ApiProperty({
    description: 'Total amount of curated collections'
  })
  @IsNumber()
  totalCurated: number;

  @ApiProperty({
    description: 'Total amount of curation votes on collections'
  })
  @IsNumber()
  totalCuratedVotes: number;
}
