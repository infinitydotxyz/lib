import crypto from 'crypto';
import { BigNumber } from 'ethers';
import { OBOrder } from '../types/core';

export const orderHash = (obj: OBOrder): string => {
  const copy = JSON.parse(JSON.stringify(obj));

  // we don't want the id part of the hash
  copy.id = undefined;

  // we don't want the currentPrice part of the hash
  // this is set on ActiveSellOrder
  copy.currentPrice = undefined;

  // added to to sell orders to help queries
  copy.collectionAddresses = undefined;

  let data = '';

  // JSON.stringify can have different results depending on order of keys
  // sort keys first
  const keys = Object.keys(copy).sort();
  for (const key of keys) {
    if (key === 'nfts') {
      const cols = [];
      const ids = [];

      for (const item of obj.nfts) {
        cols.push(item.collection);
        ids.push(...item.tokenIds);
      }

      cols.sort();
      ids.sort();

      data += `cols: ${cols.toString()}`;
      data += `ids: ${ids.toString()}`;
    } else {
      const val = copy[key];
      if (val) {
        data += `${key}: ${val.toString()}`;
      }
    }
  }

  return crypto.createHash('sha256').update(data).digest('hex').trim().toLowerCase();
};

export const isOrderEqual = (a: OBOrder, b: OBOrder): boolean => {
  // use ids if set
  if (a.id && b.id) {
    return a.id === b.id;
  }

  return orderHash(a) === orderHash(b);
};

export const isOrderExpired = (order: OBOrder): boolean => {
  // special case of never expire
  if (BigNumber.from(order.endTime).eq(0)) {
    return false;
  }

  return BigNumber.from(order.endTime).lt(nowSeconds());
};

export const nowSeconds = (): BigNumber => {
  return BigNumber.from(Math.floor(Date.now() / 1000));
};

export const getCurrentOrderPrice = (order: OBOrder): BigNumber => {
  const startTime = BigNumber.from(order.startTime);
  const endTime = BigNumber.from(order.endTime);
  const startPrice = BigNumber.from(order.startPrice);
  const endPrice = BigNumber.from(order.endPrice);
  const duration = endTime.sub(startTime);
  let priceDiff = startPrice.sub(endPrice);
  if (priceDiff.eq(0) || duration.eq(0)) {
    return startPrice;
  }
  const elapsedTime = BigNumber.from(nowSeconds()).sub(startTime);
  const portion = elapsedTime.gt(duration) ? 1 : elapsedTime.div(duration);
  priceDiff = priceDiff.mul(portion);
  return startPrice.sub(priceDiff);
};
