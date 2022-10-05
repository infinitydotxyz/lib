import { ChainId } from '../ChainId';

export enum RaffleType {
  User = 'USER',
  Collection = 'COLLECTION'
}

export enum RaffleState {
  /**
   * raffle has not started yet
   */
  Unstarted = 'UNSTARTED',
  /**
   * raffle is currently accruing the prize
   * and entrants are gaining tickets
   */
  InProgress = 'IN_PROGRESS',
  /**
   * raffle is no longer accruing prizes
   * entrants can no longer gain tickets
   * but tickets have not been finalized
   */
  Locked = 'LOCKED',
  /**
   * raffle tickets are finalized
   */
  Finalized = 'FINALIZED',
  /**
   * winner has been selected
   */
  Completed = 'COMPLETED'
}

export interface StakingContractRaffle {
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
}

export interface UserRaffleConfig {
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
}

export interface UserRaffle extends StakingContractRaffle {
  config: UserRaffleConfig;
}
