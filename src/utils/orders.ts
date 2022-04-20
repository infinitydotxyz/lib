import { keccak256 } from '@ethersproject/solidity';
import { error } from 'console';
import {
  ETHEREUM_WETH_ADDRESS,
  NULL_ADDRESS,
  NULL_HASH,
  POLYGON_INFINITY_EXCHANGE_ADDRESS,
  POLYGON_INFINITY_FEE_TREASURY_ADDRESS,
  POLYGON_INFINITY_OB_COMPLICATION_ADDRESS,
  POLYGON_WETH_ADDRESS
} from './constants';

export function getOrderId(user: string, nonce: string, chainId: string): string {
  try {
    return keccak256(['address', 'uint256', 'uint256'], [user, nonce, chainId]);
  } catch (e) {
    error('Error calculating orderId', e);
  }
  return NULL_HASH;
}

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
