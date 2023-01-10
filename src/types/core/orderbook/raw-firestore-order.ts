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
    processed: boolean;
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
    processed: boolean;
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
    processed: boolean;
  };

  rawOrder: RawOrderWithoutError;

  order: QueryableOrder;
}

export type RawFirestoreOrder = RawFirestoreOrderWithError | RawFirestoreOrderWithoutError;
