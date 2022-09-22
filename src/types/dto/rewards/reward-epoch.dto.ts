import { ApiProperty } from '@nestjs/swagger';
import { Epoch } from '../../core';
import { RewardPhaseDto } from './reward-phase.dto';

export class RewardEpochDto {
  @ApiProperty({
    description: 'Name of the epoch'
  })
  name: Epoch;

  @ApiProperty({
    description: 'Earliest possible timestamp that the epoch will go live'
  })
  startsAt: number;

  @ApiProperty({
    description: 'Whether the epoch is currently active'
  })
  isActive: boolean;

  @ApiProperty({
    description: 'Phases for the epoch'
  })
  phases: RewardPhaseDto[];
}
