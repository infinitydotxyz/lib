import { ChainId, RaffleState, RaffleType } from '../../core';

export class UserRaffleDto {
  stakerContractAddress: string;
  stakerContractChainId: ChainId;
  type: RaffleType;
  updatedAt: number;
  chainId: ChainId;
  state: RaffleState;
  raffleContractAddress: string;
  raffleContractChainId: ChainId;
  id: string;
  activePhaseIds: string[];
  activePhases: { name: string; id: string; index: number }[];
  name: string;
  config: {
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
    volume: { ticketRateDenominator: number; ticketRateNumerator: number };
  };
  progress: number;
  totals: {
    numUniqueEntrants: number;
    totalNumTickets: number;
    prizePoolEth: number;
    prizePoolWei: string;
    expectedPrizePoolUSDC: number;
  };
}
