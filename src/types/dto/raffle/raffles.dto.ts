import { UserRaffleDto } from './user-raffle.dto';

export class UserRafflesArrayDto {
  data: {
    raffles: UserRaffleDto[];
    ethPrice: number;
  };
  hasNextPage: boolean;
  cursor: string;
}
