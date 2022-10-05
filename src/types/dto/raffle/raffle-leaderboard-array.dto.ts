import { ApiProperty } from '@nestjs/swagger';
import { FinalizedUserRaffleEntrant, RaffleEntrant } from '../../core';

export type RaffleLeaderboardUser = Pick<
  RaffleEntrant,
  'stakerContractAddress' | 'raffleId' | 'entrant' | 'numTickets' | 'updatedAt' | 'data' | 'chainId'
> &
  ({ tickets: null } | Pick<FinalizedUserRaffleEntrant, 'tickets'>) & { probability: number };

export class RaffleLeaderboardArrayDto {
  @ApiProperty({ description: 'Whether there are more results available' })
  hasNextPage: boolean;

  @ApiProperty({
    description: "Array of user's ordered by the number of tickets they hold"
  })
  data: RaffleLeaderboardUser[];

  @ApiProperty({ description: 'Cursor that can be used to get the next page' })
  cursor: string;
}
