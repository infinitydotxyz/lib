import { ApiProperty } from '@nestjs/swagger';

export class TradingFeeRefundDto {
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

  @ApiProperty({
    description: 'Configuration for listing rewards (if applicable)'
  })
  listingRewardsConfig?: {
    /**
     * max percent of the trading fee refund supply
     * that will be given out to listings
     */
    maxRewardSupplyPercent: number;
    /**
     * reward supply given out to users due to listings
     */
    rewardSupplyUsed: number;
    /**
     * max percent above floor price that a listing can be
     */
    maxPercentAboveFloor: number;

    /**
     * min time that a listing must be active for
     */
    minTimeValid: number;

    /**
     * multiplier on the reward
     */
    ticketMultiplier: number;
  };
}
