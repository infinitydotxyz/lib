import { ChainId } from './ChainId';
import { StakeAmount } from './StakeAmount';
import { StakeDuration } from './StakeDuration';

export enum StakerEventType {
  RageQuit = 'RAGE_QUIT',
  Staked = 'STAKED',
  UnStaked = 'UN_STAKED'
}

export interface StakeInfo {
  [StakeDuration.X0]: StakeAmount;
  [StakeDuration.X3]: StakeAmount;
  [StakeDuration.X6]: StakeAmount;
  [StakeDuration.X12]: StakeAmount;
}

export interface StakerEvent {
  user: string;
  amount: string;
  blockNumber: number;
  timestamp: number;
  txHash: string;
  discriminator: StakerEventType;
  stakerContractAddress: string;
  stakerContractChainId: ChainId;
  processed: boolean;
  stakeInfo: StakeInfo;
  stakePower: number;
  updatedAt: number;
}

export interface TokensUnStakedEvent extends StakerEvent {
  discriminator: StakerEventType.UnStaked;
}

export interface RageQuitEvent extends StakerEvent {
  penaltyAmount: string;
  discriminator: StakerEventType.RageQuit;
}

export interface TokensStakedEvent extends StakerEvent {
  duration: StakeDuration;
  discriminator: StakerEventType.Staked;
}

export type StakerEvents = TokensUnStakedEvent | RageQuitEvent | TokensStakedEvent;
