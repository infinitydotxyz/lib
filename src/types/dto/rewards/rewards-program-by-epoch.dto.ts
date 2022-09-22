import { Epoch } from '../../core';
import { RewardEpochDto } from './reward-epoch.dto';

export class RewardsProgramByEpochDto {
  [Epoch.One]: RewardEpochDto;
  [Epoch.Two]: RewardEpochDto;
  [Epoch.Three]: RewardEpochDto;
}
