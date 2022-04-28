import { BaseNftEvent } from './NftEvent';
import { UserEvent } from './UserEvent';

export interface OrderBookEvent extends BaseNftEvent, UserEvent {
  /**
   * id of the order
   */
  orderId: string;

  /**
   * id of the order item corresponding to this event
   */
  orderItemId: string;

  /**
   * payment token address
   */
  paymentToken: string;

  isSellOrder: boolean;

  quantity: number;

  startPriceEth: number;

  endPriceEth: number;

  startTimeMs: number;

  endTimeMs: number;

  makerUsername: string;

  makerAddress: string;

  takerUsername: string;

  takerAddress: string;
}
