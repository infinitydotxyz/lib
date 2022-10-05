import { UserRaffleDto } from './user-raffle.dto';

export class UserRafflesArrayDto {
  data: UserRaffleDto[];
  hasNextPage: boolean;
  cursor: string;
}
