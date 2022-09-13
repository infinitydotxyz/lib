import { ChainId } from '../ChainId';
import { Epoch, Phase } from '../rewards/reward-program';

export interface RaffleTicketPhaseDoc {
  phase: Phase;
  epoch: Epoch;
  numTickets: number;
  uniqueUsers: number;
  updatedAt: number;
  chainId: ChainId;
  stakerContractAddress: string;
  blockNumber: number;
  isFinalized: boolean;
}
