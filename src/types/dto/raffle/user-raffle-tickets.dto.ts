import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ChainId, Epoch, Phase } from '../../core';

export class UserRaffleTicketsDto {
  @ApiProperty({
    description: "The user's address"
  })
  userAddress: string;
  @ApiProperty({
    description: "The user's total number of tickets"
  })
  numTickets: number;
  @ApiProperty({
    description: 'The chain ID of the raffle',
    enum: ChainId
  })
  chainId: ChainId;

  @ApiProperty({
    description: 'The staker contract address corresponding to the raffle'
  })
  stakerContractAddress: string;

  @ApiProperty({
    description: 'The epoch corresponding to the raffle',
    enum: Epoch
  })
  epoch: Epoch;

  @ApiProperty({
    description: 'The phase corresponding to the raffle',
    enum: Phase
  })
  phase: Phase;

  @ApiProperty({
    description: "The user's total volume in USDC"
  })
  volumeUSDC: number;

  @ApiProperty({
    description: "The user's chance of winning the raffle"
  })
  chanceOfWinning: number;

  @ApiProperty({
    description: "The user's rank in the raffle"
  })
  rank: number;

  @ApiProperty({
    description: 'The timestamp the raffle was updated'
  })
  updatedAt: number;

  @ApiPropertyOptional({
    description:
      'The range of ticket numbers the user owns. Only present once the raffle is finalized. Start and end are inclusive.'
  })
  tickets?: {
    start: string;
    end: string;
  };
}
