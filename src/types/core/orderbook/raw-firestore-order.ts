import { ChainId } from '../ChainId';
import { OrderSource } from './order-source';
import { QueryableOrder } from './queryable-order';
import { OrderError, RawOrder, RawOrderWithoutError } from './raw-order';

export interface BaseRawFirestoreOrder {
  metadata: {
    id: string;
    chainId: ChainId;
    source: OrderSource;
    updatedAt: number;
    createdAt: number;
    hasError: boolean;
  };
  error?: OrderError;

  rawOrder?: RawOrder;

  order?: QueryableOrder;
}

export interface RawFirestoreOrderWithError {
  metadata: {
    id: string;
    chainId: ChainId;
    source: OrderSource;
    updatedAt: number;
    createdAt: number;
    hasError: true;
  };
  error: OrderError;

  rawOrder?: RawOrder;

  order?: QueryableOrder;
}

export interface RawFirestoreOrderWithoutError {
  metadata: {
    id: string;
    chainId: ChainId;
    source: OrderSource;
    updatedAt: number;
    createdAt: number;
    hasError: false;
  };

  rawOrder: RawOrderWithoutError;

  order: QueryableOrder;
}

export type RawFirestoreOrder = RawFirestoreOrderWithError | RawFirestoreOrderWithoutError;
