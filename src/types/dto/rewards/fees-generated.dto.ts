import { ApiProperty } from '@nestjs/swagger';

export class FeesGeneratedDto {
  @ApiProperty({
    description: 'Total fees generated in wei'
  })
  feesGeneratedWei: string;

  @ApiProperty({
    description: 'Total fees generated in ETH'
  })
  feesGeneratedEth: number;

  @ApiProperty({
    description: 'Total fees generated in USDC'
  })
  feesGeneratedUSDC: number;
}
