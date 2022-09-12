import { ApiProperty } from '@nestjs/swagger';
import { ChainId, Epoch, Phase, RewardProgram, RewardType } from '../../core';

export class TradingRewardDto {
  @ApiProperty({
    description: 'Maximum reward that can be claimed'
  })
  maxReward: number;

  @ApiProperty({
    description: 'Reward rate numerator'
  })
  rewardRateNumerator: number;

  @ApiProperty({
    description: 'Reward rate denominator'
  })
  rewardRateDenominator: number;

  @ApiProperty({
    description: 'Reward type',
    enum: RewardType
  })
  rewardType: RewardType;

  @ApiProperty({
    description: 'Total reward supply'
  })
  rewardSupply: number;

  @ApiProperty({
    description: 'Total reward supply that has been used'
  })
  rewardSupplyUsed: number;

  @ApiProperty({
    description: 'Portion of the reward that the buyer of an NFT receives'
  })
  buyerPortion: number;

  @ApiProperty({
    description: 'Portion of the reward that the seller of an NFT receives'
  })
  sellerPortion: number;
}

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
    description: 'Total amount of veNFT rewards the user has gained during the phase'
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

export class UserTotalRewardsDto {
  @ApiProperty({
    description: 'Total volume the user has transacted. In eth'
  })
  userVolume: number;

  @ApiProperty({
    description: 'Total amount of veNFT rewards the user has gained'
  })
  userRewards: number;

  @ApiProperty({
    description: 'Total amount of sales the user has made'
  })
  userSells: number;

  @ApiProperty({
    description: 'Total number of purchases the user has made'
  })
  userBuys: number;

  @ApiProperty({
    description: 'Total amount of rewards gained via curation in wei'
  })
  userCurationRewardsWei: string;

  @ApiProperty({
    description: 'Total amount of rewards gained via curation in eth'
  })
  userCurationRewardsEth: number;
}

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

export class RewardsProgramByEpochDto {
  [Epoch.One]: RewardEpochDto;
  [Epoch.Two]: RewardEpochDto;
  [Epoch.Three]: RewardEpochDto;
}
