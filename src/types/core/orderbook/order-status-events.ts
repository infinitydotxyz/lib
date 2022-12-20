import { ChainId } from '../ChainId';
import { ChainOBOrder } from '../OBOrder';
import { OrderStatus } from './order-status';

export enum OrderStatusEventKind {
  Created = 'created',
  Activated = 'activated',
  Deactivated = 'deactivated'
}

export interface BaseOrderStatusEvent {
  id: string;
  orderId: string;
  chainId: ChainId;
  status: OrderStatus;
  timestamp: number;
  kind: OrderStatusEventKind;
}

export interface OrderStatusCreatedEvent extends BaseOrderStatusEvent {
  order: ChainOBOrder;
  kind: OrderStatusEventKind.Created;
}

export interface OrderStatusChangedEvent extends BaseOrderStatusEvent {
  kind: OrderStatusEventKind.Activated | OrderStatusEventKind.Deactivated;
  prevStatus: OrderStatus;
}

export type OrderStatusEvent = OrderStatusCreatedEvent | OrderStatusChangedEvent;
