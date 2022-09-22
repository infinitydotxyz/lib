import { ApiProperty } from '@nestjs/swagger';
import { Phase, Epoch, RewardProgram } from '../../core';
import { TradingRewardDto } from './trading-reward.dto';

export class RewardPhaseDto {
  @ApiProperty({
    description: 'Name of the phase'
  })
  name: Phase;

  @ApiProperty({
    description: 'Epoch the phase is in'
  })
  epoch: Epoch;

  @ApiProperty({
    description: 'Whether the phase is currently active'
  })
  isActive: boolean;

  @ApiProperty({
    description: 'The last block included in the phase. Determined by the last event that gets included in the phase.'
  })
  maxBlockNumber: number;

  @ApiProperty({
    description:
      'Trading fee rewards description for the phase. If null, trading fee rewards are not enabled for the phase'
  })
  [RewardProgram.TradingFee]: TradingRewardDto | null;

  @ApiProperty({
    description: 'NFT reward description for the phase. If null, NFT rewards are not enabled for the phase'
  })
  [RewardProgram.NftReward]: TradingRewardDto | null;

  @ApiProperty({
    description: 'Curation rewards description for the phase. If false, curation rewards are not enabled for the phase'
  })
  [RewardProgram.Curation]: boolean;
}
