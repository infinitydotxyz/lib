import { ApiProperty } from '@nestjs/swagger';
import { ChainId, Epoch, Phase } from '../../core';

export class PhaseRaffleDto {
  @ApiProperty({
    description: 'The phase corresponding to the raffle',
    enum: Phase
  })
  phase: Phase;

  @ApiProperty({
    description: 'The epoch corresponding to the raffle',
    enum: Epoch
  })
  epoch: Epoch;

  @ApiProperty({
    description: 'The total number of tickets currently in the raffle'
  })
  numTickets: number;

  @ApiProperty({
    description: 'The total number of unique users owning raffle tickets'
  })
  uniqueUsers: number;

  @ApiProperty({
    description: 'The timestamp the raffle was updated'
  })
  updatedAt: number;

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
    description: 'Whether the raffle is finalized and tickets are no longer able to be acquired'
  })
  isFinalized: boolean;
}
