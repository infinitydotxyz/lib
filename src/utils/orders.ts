import { BigNumber } from '@ethersproject/bignumber';
import { parseEther } from '@ethersproject/units';
import { BytesLike } from 'ethers';
import { defaultAbiCoder, keccak256, recoverAddress, solidityKeccak256 } from 'ethers/lib/utils';
import { ChainId, ChainNFTs, ChainOBOrder, Erc20TokenMetadata, OBOrder } from '../types/core';
import { chainConstants, CURRENT_VERSION, Env, NULL_ADDRESS, Version } from './constants';
import { trimLowerCase } from './formatters';

export function getTxnCurrencyAddress(_chainId: string, env = Env.Prod, version = CURRENT_VERSION): string {
  const chainId = _chainId as ChainId;
  return chainConstants[chainId]?.[env]?.[version]?.wethAddress ?? NULL_ADDRESS;
}

export function getOBComplicationAddress(_chainId: string, env = Env.Prod, version = CURRENT_VERSION): string {
  const chainId = _chainId as ChainId;
  return chainConstants[chainId]?.[env]?.[version]?.flowContracts?.obComplicationAddress ?? NULL_ADDRESS;
}

export function getExchangeAddress(_chainId: string, env = Env.Prod, version = CURRENT_VERSION): string {
  const chainId = _chainId as ChainId;
  return chainConstants[chainId]?.[env]?.[version]?.flowContracts?.exchangeAddress ?? NULL_ADDRESS;
}

export function getStakerAddress(_chainId: string, env = Env.Prod, version = CURRENT_VERSION): string {
  const chainId = _chainId as ChainId;
  return chainConstants[chainId]?.[env]?.[version]?.infinityContracts?.stakerAddress ?? NULL_ADDRESS;
}

export function getXFLStakerAddress(_chainId: string, env = Env.Prod, version = CURRENT_VERSION): string {
  const chainId = _chainId as ChainId;
  return chainConstants[chainId]?.[env]?.[version]?.flowContracts?.xflStakerAddress ?? NULL_ADDRESS;
}

export function getTokenAddress(_chainId: string, env = Env.Prod, version = CURRENT_VERSION): string {
  const chainId = _chainId as ChainId;
  return chainConstants[chainId]?.[env]?.[version]?.flowContracts?.token.address ?? NULL_ADDRESS;
}

export function getFlurTokenAddress(): string {
  return '0xdae65e3c3933e1552c3d7fe1b585af33228a8840';
}

export function getCmDistributorAddress(_chainId: string, env = Env.Prod, version = CURRENT_VERSION): string {
  const chainId = _chainId as ChainId;
  return chainConstants[chainId]?.[env]?.[version]?.flowContracts?.cmDistributorAddress ?? NULL_ADDRESS;
}

export function getToken(_chainId: string, env = Env.Prod, version = CURRENT_VERSION): Erc20TokenMetadata | null {
  const chainId = _chainId as ChainId;
  return chainConstants[chainId]?.[env]?.[version]?.flowContracts?.token ?? null;
}

export function getTokenByStaker(chainId: ChainId, stakerContractAddress: string) {
  const envConstants = chainConstants[chainId];
  for (const [, versionConstants] of Object.entries(envConstants)) {
    for (const [, constants] of Object.entries(versionConstants)) {
      if (constants.infinityContracts?.stakerAddress === stakerContractAddress) {
        return constants.infinityContracts.token;
      }
    }
  }
  throw new Error(`No token address found for staker address ${stakerContractAddress} on chain ${chainId}`);
}

export function getTokenAddressByStakerAddress(chainId: ChainId, stakerContractAddress: string) {
  const token = getTokenByStaker(chainId, stakerContractAddress);
  return {
    tokenContractChainId: token.chainId,
    tokenContractAddress: token.address
  };
}

/**
 * returns an array of staker contracts that should currently be supported by services
 */
export function getRelevantStakerContracts(chainId: ChainId) {
  if (chainId === ChainId.Mainnet) {
    return [
      getStakerAddress(ChainId.Mainnet, Env.Prod, Version.V2),
      getStakerAddress(ChainId.Mainnet, Env.Prod, Version.V1)
    ];
  }
  return [getStakerAddress(chainId)];
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

export function orderHash(order: ChainOBOrder): string {
  const fnSign =
    'Order(bool isSellOrder,address signer,uint256[] constraints,OrderItem[] nfts,address[] execParams,bytes extraParams)OrderItem(address collection,TokenInfo[] tokens)TokenInfo(uint256 tokenId,uint256 numTokens)';
  const orderTypeHash = solidityKeccak256(['string'], [fnSign]);

  const constraints = order.constraints;
  const execParams = order.execParams;
  const extraParams = order.extraParams;

  const typesArr = [];
  for (let i = 0; i < constraints.length; i++) {
    typesArr.push('uint256');
  }
  const constraintsHash = keccak256(defaultAbiCoder.encode(typesArr, constraints));

  const orderItemsHash = nftsHash(order.nfts);
  const execParamsHash = keccak256(defaultAbiCoder.encode(['address', 'address'], execParams));

  const calcEncode = defaultAbiCoder.encode(
    ['bytes32', 'bool', 'address', 'bytes32', 'bytes32', 'bytes32', 'bytes32'],
    [
      orderTypeHash,
      order.isSellOrder,
      order.signer,
      constraintsHash,
      orderItemsHash,
      execParamsHash,
      keccak256(extraParams)
    ]
  );

  return keccak256(calcEncode);
}

function nftsHash(nfts: ChainNFTs[]): string {
  const fnSign = 'OrderItem(address collection,TokenInfo[] tokens)TokenInfo(uint256 tokenId,uint256 numTokens)';
  const typeHash = solidityKeccak256(['string'], [fnSign]);

  const hashes = [];
  for (const nft of nfts) {
    const hash = keccak256(
      defaultAbiCoder.encode(['bytes32', 'uint256', 'bytes32'], [typeHash, nft.collection, tokensHash(nft.tokens)])
    );
    hashes.push(hash);
  }
  const encodeTypeArray = hashes.map(() => 'bytes32');
  const nftsHash = keccak256(defaultAbiCoder.encode(encodeTypeArray, hashes));

  return nftsHash;
}

function tokensHash(tokens: ChainNFTs['tokens']): string {
  const fnSign = 'TokenInfo(uint256 tokenId,uint256 numTokens)';
  const typeHash = solidityKeccak256(['string'], [fnSign]);

  const hashes = [];
  for (const token of tokens) {
    const hash = keccak256(
      defaultAbiCoder.encode(['bytes32', 'uint256', 'uint256'], [typeHash, token.tokenId, token.numTokens])
    );
    hashes.push(hash);
  }
  const encodeTypeArray = hashes.map(() => 'bytes32');
  const tokensHash = keccak256(defaultAbiCoder.encode(encodeTypeArray, hashes));
  return tokensHash;
}

export function verifySig(digest: BytesLike, signer: string, sig: BytesLike): boolean {
  const decodedSig = defaultAbiCoder.decode(['bytes32', 'bytes32', 'uint8'], sig);
  const sigObject = {
    r: decodedSig[0],
    s: decodedSig[1],
    v: decodedSig[2]
  };
  const recoveredAddress = recoverAddress(digest, sigObject);
  return trimLowerCase(recoveredAddress) === trimLowerCase(signer);
}
