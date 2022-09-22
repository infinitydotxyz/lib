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
}
