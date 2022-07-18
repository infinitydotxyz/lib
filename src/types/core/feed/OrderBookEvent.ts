import { BaseFeedEventWithTitle } from './FeedEvent';
import { BaseNftEvent, NftData } from './NftEvent';
import { UserEvent } from './UserEvent';

type UserOrderBookEvent = BaseNftEvent & UserEvent;

export interface OrderItemData extends NftData, UserEvent {
  orderItemId: string;
  takerAddress?: string;
  takerUsername?: string;
}
export interface MultiOrderEvent extends BaseFeedEventWithTitle {
  orderId: string;

  chainId: string;

  paymentToken: string;

  isSellOrder: boolean;

  quantity: number;

  startPriceEth: number;

  endPriceEth: number;

  startTimeMs: number;

  endTimeMs: number;

  makerUsername: string;

  makerAddress: string;

  takerUsername?: string;

  takerAddress?: string;

  orderItems: OrderItemData[];

  sampleImages: string[];
}

export interface OrderBookEvent extends UserOrderBookEvent {
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
