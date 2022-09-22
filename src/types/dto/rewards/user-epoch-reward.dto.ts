import { ApiProperty } from '@nestjs/swagger';
import { Epoch } from '../../core';
import { UserPhaseRewardDto } from './user-phase-reward.dto';

export class UserEpochRewardDto {
  @ApiProperty({
    description: 'Name of the epoch'
  })
  name: Epoch;

  @ApiProperty({
    description: "Phases for the epoch containing the user's rewards"
  })
  phases: UserPhaseRewardDto[];
}
