import { ChainId } from '../ChainId';
import { UserDisplayData } from '../UserDisplayData';
import { RaffleType } from './raffle-config';

export interface RaffleEntrantBase<U, T> {
  raffleId: string;
  raffleType: RaffleType;
  numTickets: number;
  chainId: ChainId;
  entrantAddress: string;
  stakerContractAddress: string;
  updatedAt: number;
  isFinalized: boolean;
  isAggregated: boolean;
  isLedgerAggregated: boolean;
  entrant: U;
  data: T;
}

export interface UserRaffleEntrantData {
  volumeUSDC: number;
  numValidOffers: number;
  numValidListings: number;
  numTicketsFromOffers: number;
  numTicketsFromListings: number;
  numTicketsFromVolume: number;
}

export interface NonFinalizedUserRaffleEntrant extends RaffleEntrantBase<UserDisplayData, UserRaffleEntrantData> {
  isFinalized: false;
  raffleType: RaffleType.User;
}

export interface FinalizedUserRaffleEntrant extends RaffleEntrantBase<UserDisplayData, UserRaffleEntrantData> {
  raffleType: RaffleType.User;
  isFinalized: true;
  tickets: {
    start: string;
    end: string;
  };
}

export type RaffleEntrant = FinalizedUserRaffleEntrant | NonFinalizedUserRaffleEntrant;
