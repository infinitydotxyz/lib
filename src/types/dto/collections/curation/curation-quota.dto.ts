import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { UserStakeDto } from '../../user';

export class CurationQuotaDto {
  /**
   * The user stake
   */
  @ApiProperty()
  stake: UserStakeDto;

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
