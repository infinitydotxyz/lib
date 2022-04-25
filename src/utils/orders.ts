import { BigNumber } from '@ethersproject/bignumber';
import { parseEther } from '@ethersproject/units';
import { OBOrder } from '../types/core';
import {
  ETHEREUM_WETH_ADDRESS,
  NULL_ADDRESS, POLYGON_INFINITY_EXCHANGE_ADDRESS,
  POLYGON_INFINITY_FEE_TREASURY_ADDRESS,
  POLYGON_INFINITY_OB_COMPLICATION_ADDRESS,
  POLYGON_WETH_ADDRESS
} from './constants';

export function getTxnCurrencyAddress(chainId: string): string {
  if (chainId === '1') {
    return ETHEREUM_WETH_ADDRESS;
  } else if (chainId === '137') {
    return POLYGON_WETH_ADDRESS;
  } else {
    return NULL_ADDRESS;
  }
}

export function getOBComplicationAddress(chainId: string): string {
  if (chainId === '1') {
    return NULL_ADDRESS; // todo: change this
  } else if (chainId === '137') {
    return POLYGON_INFINITY_OB_COMPLICATION_ADDRESS;
  } else {
    return NULL_ADDRESS;
  }
}

export function getExchangeAddress(chainId: string): string {
  if (chainId === '1') {
    return NULL_ADDRESS; // todo: change this
  } else if (chainId === '137') {
    return POLYGON_INFINITY_EXCHANGE_ADDRESS;
  } else {
    return NULL_ADDRESS;
  }
}

export function getFeeTreasuryAddress(chainId: string): string {
  if (chainId === '1') {
    return NULL_ADDRESS; // todo: change this
  } else if (chainId === '137') {
    return POLYGON_INFINITY_FEE_TREASURY_ADDRESS;
  } else {
    return NULL_ADDRESS;
  }
}

export const getCurrentOBOrderPrice = (order: OBOrder): BigNumber => {
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
  const elapsedTime = BigNumber.from(Date.now()).sub(startTime.toNumber());
  const precision = 10000;
  const portion = elapsedTime.gt(duration) ? 1 : elapsedTime.mul(precision).div(duration);
  priceDiff = priceDiff.mul(portion).div(precision);
  let currentPrice = BigNumber.from(0);
  if (startPrice.gt(endPrice)) {
    currentPrice = startPrice.sub(priceDiff);
  } else {
    currentPrice = startPrice.add(priceDiff);
  }
  return currentPrice;
};

export const isOBOrderExpired = (order: OBOrder): boolean => {
  // special case of never expire
  if (order.endTimeMs === 0) {
    return false;
  }

  return order.endTimeMs < Date.now();
};
