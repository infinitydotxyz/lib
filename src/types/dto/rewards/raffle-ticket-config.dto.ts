export class RaffleTicketConfigDto {
  listing: {
    maxPercentAboveFloor: number;
    minTimeValid: number;
    ticketMultiplier: number;
  };
  offer: {
    maxPercentBelowFloor: number;
    minTimeValid: number;
    ticketMultiplier: number;
  };
  volume: {
    /**
     * number of tickets in rate calculation
     */
    ticketRateNumerator: number;
    /**
     * amount of USDC in rate calculation
     */
    ticketRateDenominator: number;
  };
}
