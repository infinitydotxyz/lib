import { ChainId } from '../ChainId';
import { Epoch, Phase } from '../rewards';

export interface UserRaffleTicketsBase {
  userAddress: string;
  numTickets: number;
  chainId: ChainId;
  stakerContractAddress: string;
  blockNumber: number;
  epoch: Epoch;
  phase: Phase;
  volumeUSDC: number;
  chanceOfWinning: number;
  rank: number;
  updatedAt: number;
  isFinalized: boolean;
}

export interface NonFinalizedUserRaffleTickets extends UserRaffleTicketsBase {
  isFinalized: false;
}

export interface FinalizedUserRaffleTickets extends UserRaffleTicketsBase {
  tickets: {
    start: string;
    end: string;
  };
  isFinalized: true;
}

export type UserRaffleTickets = NonFinalizedUserRaffleTickets | FinalizedUserRaffleTickets;
