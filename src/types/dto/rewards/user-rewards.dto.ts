import { ApiProperty } from '@nestjs/swagger';
import { ChainId } from '../../core';
import { UserTotalRewardsDto } from './user-total-rewards.dto';

export class UserRewardsDto {
  @ApiProperty({
    description: 'Chain Id oif the rewards',
    enum: ChainId
  })
  chainId: ChainId;

  @ApiProperty({
    description: 'Total rewards for the user over all epochs'
  })
  totals: UserTotalRewardsDto;
}
