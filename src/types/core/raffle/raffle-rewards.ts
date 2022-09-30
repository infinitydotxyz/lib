import { ChainId } from '../ChainId';
import { RaffleType } from './raffle-config';

export interface RaffleRewardsDoc {
  stakerContractAddress: string;
  stakerContractChainId: ChainId;
  type: RaffleType;
  raffleId: string;
  updatedAt: number;
  chainId: ChainId;
  prizePoolWei: string;
  prizePoolEth: number;
}
