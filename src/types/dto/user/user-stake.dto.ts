import { ApiProperty } from '@nestjs/swagger';
import { StakeInfo } from '../../core';

export class UserStakeDto {
  @ApiProperty({
    description: "User's amount for each stake duration"
  })
  stakeInfo: StakeInfo;

  @ApiProperty({
    description: "User's stake power. i.e. the number of votes the user has available to them"
  })
  stakePower: number;

  @ApiProperty({
    description: "The block number of the last block that updated the user's stake"
  })
  blockUpdatedAt: number;
}
