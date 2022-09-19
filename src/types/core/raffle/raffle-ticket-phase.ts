import { ChainId } from '../ChainId';
import { Epoch, Phase } from '../rewards/reward-program';

export interface BaseRaffleTicketPhaseDoc {
  phase: Phase;
  epoch: Epoch;
  numTickets: number;
  uniqueUsers: number;
  updatedAt: number;
  chainId: ChainId;
  stakerContractAddress: string;
  blockNumber: number;
  isFinalized: boolean;
  didError: boolean;
}

export interface ErroredRaffleTicketPhaseDoc extends BaseRaffleTicketPhaseDoc {
  phase: Phase;
  epoch: Epoch;
  numTickets: number;
  uniqueUsers: number;
  updatedAt: number;
  chainId: ChainId;
  stakerContractAddress: string;
  blockNumber: number;
  isFinalized: false;
  didError: true;
}

export type raffleTicketPhaseDoc = BaseRaffleTicketPhaseDoc | ErroredRaffleTicketPhaseDoc;
