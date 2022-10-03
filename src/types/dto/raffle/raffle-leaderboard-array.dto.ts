import { ApiProperty } from '@nestjs/swagger';

export class RaffleLeaderboardArrayDto {
  @ApiProperty({ description: 'Whether there are more results available' })
  hasNextPage: boolean;

  @ApiProperty({
    description: "Array of user's ordered by the number of tickets they hold"
  })
  data: any[];

  @ApiProperty({ description: 'Cursor that can be used to get the next page' })
  cursor: string;
}
