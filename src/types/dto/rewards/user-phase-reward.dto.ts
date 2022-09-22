import { ApiProperty } from '@nestjs/swagger';
import { Phase, RewardProgram } from '../../core';
import { TradingRewardDto } from './trading-reward.dto';

export class UserPhaseRewardDto {
  @ApiProperty({
    description: 'Name of the phase'
  })
  name: Phase;

  @ApiProperty({
    description: 'Total volume the user has transacted during the phase. In eth'
  })
  userVolume: number;

  @ApiProperty({
    description: 'Total amount of $NFT rewards the user has gained during the phase'
  })
  userRewards: number;

  @ApiProperty({
    description: 'Total amount of sales the user has made during the phase'
  })
  userSells: number;

  @ApiProperty({
    description: 'Total number of purchases the user has made during the phase'
  })
  userBuys: number;

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
