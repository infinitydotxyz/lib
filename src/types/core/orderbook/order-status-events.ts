import { ChainId } from '../ChainId';
import { ChainOBOrder } from '../OBOrder';
import { OrderSource } from './order-source';
import { OrderStatus } from './order-status';

export interface OrderStatusEvent {
  id: string;
  orderId: string;
  chainId: ChainId;
  status: OrderStatus;
  timestamp: number;
  order: ChainOBOrder;
  gasUsage: string;
  isMostRecent: boolean;
  source: OrderSource;
  sourceOrder: unknown;
  collection: string;
}
