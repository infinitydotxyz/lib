import { ChainId } from '../ChainId';
import { ChainOBOrder } from '../OBOrder';
import { OrderStatus } from './order-status';

export interface OrderStatusEvent {
  id: string;
  orderId: string;
  chainId: ChainId;
  status: OrderStatus;
  timestamp: number;
  order: ChainOBOrder;
  isMostRecent: boolean;
}
