import { ApiProperty } from '@nestjs/swagger';
import { ChainId, Epoch } from '../../core';
import { UserEpochRewardDto } from './user-epoch-reward.dto';
import { UserTotalRewardsDto } from './user-total-rewards.dto';

export class UserRewardsDto {
  @ApiProperty({
    description: 'Chain Id oif the rewards',
    enum: ChainId
  })
  chainId: ChainId;

  @ApiProperty({
    description: "The user's rewards by epoch"
  })
  epochRewards: Record<Epoch, UserEpochRewardDto>;

  @ApiProperty({
    description: 'Total rewards for the user over all epochs'
  })
  totals: UserTotalRewardsDto;
}
