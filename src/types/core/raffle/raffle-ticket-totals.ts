import { ChainId } from '../ChainId';
import { RaffleType } from './raffle-config';

export interface RaffleTicketTotalsDoc {
  stakerContractAddress: string;
  stakerContractChainId: ChainId;
  chainId: ChainId;
  raffleId: string;
  type: RaffleType;
  isAggregated: boolean;
  updatedAt: number;
  totalsUpdatedAt: number;
  totalNumTickets: bigint;
  numUniqueEntrants: number;
}
