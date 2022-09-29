import { RaffleTicketConfigDto } from './raffle-ticket-config.dto';

export class RaffleConfigDto {
  /**
   * percent of the total raffle rewards split for this phase that goes to this raffle
   */
  percentage: number;
  ticketConfig: RaffleTicketConfigDto;
}
