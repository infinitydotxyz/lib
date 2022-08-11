import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { ChainId } from '../../../core';

export class CurationQuotaDto {
  /**
   * Staker contract address.
   */
  @ApiProperty()
  stakerContractAddress: string;

  /**
   * Staker contract chain id.
   */
  @ApiProperty()
  stakerContractChainId: ChainId;

  /**
   * The actual available votes, based on the available votes from the contract compared to votes stored in the database.
   */
  @ApiProperty()
  @IsNumber()
  availableVotes: number;

  /**
   * Total tokens staked.
   */
  @ApiProperty()
  @IsNumber()
  totalStaked: number;

  /**
   * Total amount of tokens in the user's wallet.
   */
  @ApiProperty()
  @IsNumber()
  tokenBalance: number;
}
