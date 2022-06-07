import { BigNumber } from '@ethersproject/bignumber';
import { parseEther } from '@ethersproject/units';
import { ChainId, OBOrder } from '../types/core';
import { chainConstants, NULL_ADDRESS } from './constants';

export function getTxnCurrencyAddress(_chainId: string): string {
  const chainId = _chainId as ChainId;
  return chainConstants[chainId]?.wethAddress ?? NULL_ADDRESS;
}

export function getOBComplicationAddress(_chainId: string): string {
  const chainId = _chainId as ChainId;
  return chainConstants[chainId]?.infinityContracts?.obComplicationAddress ?? NULL_ADDRESS;
}

export function getExchangeAddress(_chainId: string): string {
  const chainId = _chainId as ChainId;
  return chainConstants[chainId]?.infinityContracts?.exchangeAddress ?? NULL_ADDRESS;
}

export const getOBOrderPrice = (
  order: Pick<OBOrder, 'startPriceEth' | 'startTimeMs' | 'endPriceEth' | 'endTimeMs'>,
  timestamp: number
): BigNumber => {
  const startTime = BigNumber.from(order.startTimeMs);
  const endTime = BigNumber.from(order.endTimeMs);
  const startPrice = BigNumber.from(parseEther(String(order.startPriceEth)));
  const endPrice = BigNumber.from(parseEther(String(order.endPriceEth)));
  const duration = endTime.sub(startTime);
  let priceDiff = BigNumber.from(0);
  if (startPrice.gt(endPrice)) {
    priceDiff = startPrice.sub(endPrice);
  } else {
    priceDiff = endPrice.sub(startPrice);
  }
  if (priceDiff.eq(0) || duration.eq(0)) {
    return startPrice;
  }
  const elapsedTime = BigNumber.from(timestamp).sub(startTime.toNumber());
  const precision = 10000;
  const portion = elapsedTime.gt(duration) ? precision : elapsedTime.mul(precision).div(duration);
  priceDiff = priceDiff.mul(portion).div(precision);
  let priceAtTime = BigNumber.from(0);
  if (startPrice.gt(endPrice)) {
    priceAtTime = startPrice.sub(priceDiff);
  } else {
    priceAtTime = startPrice.add(priceDiff);
  }
  return priceAtTime;
};

export const getCurrentOBOrderPrice = (
  order: Pick<OBOrder, 'startPriceEth' | 'startTimeMs' | 'endPriceEth' | 'endTimeMs'>
): BigNumber => {
  return getOBOrderPrice(order, Date.now());
};

export const isOBOrderExpired = (order: Pick<OBOrder, 'endTimeMs'>): boolean => {
  // special case of never expire
  if (order.endTimeMs === 0) {
    return false;
  }

  return order.endTimeMs < Date.now();
};
