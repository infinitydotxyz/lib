import { keccak256 } from '@ethersproject/solidity';
import { error } from 'console';
import { ETHEREUM_WETH_ADDRESS, NULL_ADDRESS, POLYGON_INFINITY_OB_COMPLICATION_ADDRESS, POLYGON_WETH_ADDRESS } from './constants';

export function getOrderId(user: string, nonce: string, chainId: string) {
  try {
    return keccak256(['address', 'uint256', 'uint256'], [user, nonce, chainId]);
  } catch (e) {
    error('Error calculating orderId', e);
  }
}

export function getCurrencyAddress(chainId: string) {
  if (chainId === '1') {
    return ETHEREUM_WETH_ADDRESS;
  } else if (chainId === '137') {
    return POLYGON_WETH_ADDRESS;
  } else {
    return NULL_ADDRESS;
  }
}

export function getComplicationAddress(chainId: string) {
  if (chainId === '1') {
    return NULL_ADDRESS; // todo: change this
  } else if (chainId === '137') {
    return POLYGON_INFINITY_OB_COMPLICATION_ADDRESS;
  } else {
    return NULL_ADDRESS;
  }
}
