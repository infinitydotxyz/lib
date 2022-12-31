import { ChainId } from '../ChainId';
import { UserDisplayData } from '../UserDisplayData';
import { DisplayOrder } from './firestore-display-order';
import { OrderStatus } from './order-status';

export type BaseOrder = DisplayOrder & {
  id: string;
  chainId: ChainId;
  createdAt: number;
  isSellOrder: boolean;
  startTimeMs: number;
  endTimeMs: number;
  maker: UserDisplayData;
  numItems: number;
  currency: string;
  currentPriceEth: number;
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
  taker: UserDisplayData;
};

export type PublicOrder = BaseOrder & {
  isPrivate: false;
};

export type Order = PrivateOrder | PublicOrder;
