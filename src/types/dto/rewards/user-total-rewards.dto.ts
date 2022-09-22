import { ApiProperty } from '@nestjs/swagger';

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
