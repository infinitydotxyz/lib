import { keccak256 as solidityKeccak256 } from '@ethersproject/solidity';
import { keccak256 } from '@ethersproject/keccak256';
import { BytesLike } from '@ethersproject/bytes';
import { defaultAbiCoder } from '@ethersproject/abi';
import { parseEther } from '@ethersproject/units';
import { OBOrder, OBOrderItem, OBTokenInfo } from '../types/core';
import {
  ETHEREUM_WETH_ADDRESS,
  NULL_ADDRESS,
  NULL_HASH,
  POLYGON_INFINITY_EXCHANGE_ADDRESS,
  POLYGON_INFINITY_FEE_TREASURY_ADDRESS,
  POLYGON_INFINITY_OB_COMPLICATION_ADDRESS,
  POLYGON_WETH_ADDRESS
} from './constants';
import { error } from './logger';
import { BigNumber } from '@ethersproject/bignumber';

export function getOrderId(chainId: string, exchangeAddr: string, order: OBOrder): string {
  try {
    const fnSign =
      'Order(bool isSellOrder,address signer,uint256[] constraints,OrderItem[] nfts,address[] execParams,bytes extraParams)OrderItem(address collection,TokenInfo[] tokens)TokenInfo(uint256 tokenId,uint256 numTokens)';
    const orderTypeHash = solidityKeccak256(['string'], [fnSign]);
    // console.log('Order type hash', orderTypeHash);

    const constraints = [
      order.numItems,
      parseEther(String(order.startPriceEth)),
      parseEther(String(order.endPriceEth)),
      Math.floor(order.startTimeMs / 1000),
      Math.floor(order.endTimeMs / 1000),
      order.minBpsToSeller,
      order.nonce
    ];
    const execParams = [order.execParams.complicationAddress, order.execParams.currencyAddress];
    const extraParams = defaultAbiCoder.encode(['address'], [order.extraParams.buyer ?? NULL_ADDRESS]);

    const constraintsHash = keccak256(
      defaultAbiCoder.encode(['uint256', 'uint256', 'uint256', 'uint256', 'uint256', 'uint256', 'uint256'], constraints)
    );
    // console.log('constraints hash', constraintsHash);
    const nftsHash = _getNftsHash(order.nfts);
    const execParamsHash = keccak256(defaultAbiCoder.encode(['address', 'address'], execParams));
    // console.log('execParamsHash', execParamsHash);

    const calcEncode = defaultAbiCoder.encode(
      ['bytes32', 'bool', 'address', 'bytes32', 'bytes32', 'bytes32', 'bytes32'],
      [
        orderTypeHash,
        order.isSellOrder,
        order.makerAddress,
        constraintsHash,
        nftsHash,
        execParamsHash,
        keccak256(extraParams)
      ]
    );
    const orderHash = keccak256(calcEncode);
    return orderHash;
  } catch (e) {
    error('Error calculating orderId', e);
  }
  return NULL_HASH;
}

function _getNftsHash(nfts: OBOrderItem[]): BytesLike {
  const fnSign = 'OrderItem(address collection,TokenInfo[] tokens)TokenInfo(uint256 tokenId,uint256 numTokens)';
  const typeHash = solidityKeccak256(['string'], [fnSign]);
  // console.log('Order item type hash', typeHash);

  const hashes = [];
  for (const nft of nfts) {
    const hash = keccak256(
      defaultAbiCoder.encode(['bytes32', 'uint256', 'bytes32'], [typeHash, nft.collectionAddress, _getTokensHash(nft.tokens)])
    );
    hashes.push(hash);
  }
  const encodeTypeArray = hashes.map(() => 'bytes32');
  const nftsHash = keccak256(defaultAbiCoder.encode(encodeTypeArray, hashes));
  // console.log('nftsHash', nftsHash);
  return nftsHash;
}

function _getTokensHash(tokens: OBTokenInfo[]): BytesLike {
  const fnSign = 'TokenInfo(uint256 tokenId,uint256 numTokens)';
  const typeHash = solidityKeccak256(['string'], [fnSign]);
  // console.log('Token info type hash', typeHash);

  const hashes = [];
  for (const token of tokens) {
    const hash = keccak256(
      defaultAbiCoder.encode(['bytes32', 'uint256', 'uint256'], [typeHash, token.tokenId, token.numTokens])
    );
    hashes.push(hash);
  }
  const encodeTypeArray = hashes.map(() => 'bytes32');
  const tokensHash = keccak256(defaultAbiCoder.encode(encodeTypeArray, hashes));
  // console.log('tokensHash', tokensHash);
  return tokensHash;
}

// todo: change this
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function getOrderNonce(user: string, chainId: string): string {
  return '1';
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
