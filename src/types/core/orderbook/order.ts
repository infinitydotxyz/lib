import { ChainId } from '../ChainId';
import { DisplayOrder } from './firestore-display-order';
import { OrderStatus } from './order-status';

export type BaseOrder = DisplayOrder & {
  id: string;
  chainId: ChainId;
  createdAt: number;
  startTimeMs: number;
  endTimeMs: number;
  maker: string;
  numItems: number;
  currency: string;
  startPriceEth: number;
  endPriceEth: number;
  startPricePerItemEth: number;
  endPricePerItemEth: number;
  hasBlueCheck: boolean;
  numTokens: number;
  numCollections: number;
  isSubSetOrder: boolean;
  isDynamic: boolean;
  isPrivate: boolean;
  status: OrderStatus;
};

export type PrivateOrder = BaseOrder & {
  isPrivate: true;
  taker: string;
};

export type PublicOrder = BaseOrder & {
  isPrivate: false;
};

export type Order = PrivateOrder | PublicOrder;
