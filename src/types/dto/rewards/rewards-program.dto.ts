import { ApiProperty } from '@nestjs/swagger';
import { ChainId } from '../../core';
import { RewardEpochDto } from './reward-epoch.dto';

export class RewardsProgramDto {
  @ApiProperty({
    description: 'Chain Id of the rewards program'
  })
  chainId: ChainId;

  @ApiProperty({
    description: 'Epochs for the rewards program'
  })
  epochs: RewardEpochDto[];
}
