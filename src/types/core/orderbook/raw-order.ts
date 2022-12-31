import { ChainId, ChainOBOrder } from '..';
import { OrderSource } from './order-source';

export interface BaseRawOrder {
  id: string;
  chainId: ChainId;
  updatedAt: number;
  isSellOrder: boolean;
  createdAt: number;
}

export interface RawOrderWithoutError extends BaseRawOrder {
  source: OrderSource;
  rawOrder: any;
  infinityOrderId: string;
  infinityOrder: ChainOBOrder;
  gasUsage: string;
  isDynamic: boolean;
}

export interface OrderError {
  errorCode: number;
  value: string;
  source: OrderSource | 'unknown';
  type: 'unsupported' | 'unexpected';
}

export interface RawOrderWithError extends BaseRawOrder {
  error: OrderError;
}

export type RawOrder = RawOrderWithError | RawOrderWithoutError;
