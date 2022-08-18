import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { parseEther } from '@ethersproject/units';
import { BytesLike } from 'ethers';
import { defaultAbiCoder, keccak256, recoverAddress, solidityKeccak256 } from 'ethers/lib/utils';
import { ChainId, ChainNFTs, ChainOBOrder, OBOrder } from '../types/core';
import { chainConstants, CURRENT_VERSION, Env, NULL_ADDRESS } from './constants';
import { trimLowerCase } from './formatters';

export function getTxnCurrencyAddress(_chainId: string, env = Env.Prod, version = CURRENT_VERSION): string {
  const chainId = _chainId as ChainId;
  return chainConstants[chainId][env][version]?.wethAddress ?? NULL_ADDRESS;
}

export function getOBComplicationAddress(_chainId: string, env = Env.Prod, version = CURRENT_VERSION): string {
  const chainId = _chainId as ChainId;
  return chainConstants[chainId][env][version]?.infinityContracts?.obComplicationAddress ?? NULL_ADDRESS;
}

export function getExchangeAddress(_chainId: string, env = Env.Prod, version = CURRENT_VERSION): string {
  const chainId = _chainId as ChainId;
  return chainConstants[chainId][env][version]?.infinityContracts?.exchangeAddress ?? NULL_ADDRESS;
}

export function getStakerAddress(_chainId: string, env = Env.Prod, version = CURRENT_VERSION): string {
  const chainId = _chainId as ChainId;
  return chainConstants[chainId][env][version]?.infinityContracts?.stakerAddress ?? NULL_ADDRESS;
}

export function getTokenAddress(_chainId: string, env = Env.Prod, version = CURRENT_VERSION): string {
  const chainId = _chainId as ChainId;
  return chainConstants[chainId][env][version]?.infinityContracts?.tokenAddress ?? NULL_ADDRESS;
}

export function getTokenAddressByStakerAddress(chainId: ChainId, stakerContractAddress: string) {
  const envConstants = chainConstants[chainId];
  for (const [, versionConstants] of Object.entries(envConstants)) {
    for (const [, constants] of Object.entries(versionConstants)) {
      if (constants.infinityContracts.stakerAddress === stakerContractAddress) {
        return {
          tokenContractChainId: chainId,
          tokenContractAddress: constants.infinityContracts.tokenAddress
        };
      }
    }
  }
  throw new Error(`No token address found for staker address ${stakerContractAddress} on chain ${chainId}`);
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

  const constraintsHash = keccak256(
    defaultAbiCoder.encode(['uint256', 'uint256', 'uint256', 'uint256', 'uint256', 'uint256', 'uint256'], constraints)
  );

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

export function nftsHash(nfts: ChainNFTs[]): string {
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

export function tokensHash(tokens: ChainNFTs['tokens']): string {
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

export function getDigest(
  chainId: BigNumberish,
  verifyingContractAddress: BytesLike | string,
  orderHash: string | BytesLike
): string {
  const domainSeparator = getDomainSeparator(chainId, verifyingContractAddress);
  return solidityKeccak256(['string', 'bytes32', 'bytes32'], ['\x19\x01', domainSeparator, orderHash]);
}

export function getDomainSeparator(chainId: BigNumberish, verifyingContractAddress: BytesLike): string {
  const domainSeparator = keccak256(
    defaultAbiCoder.encode(
      ['bytes32', 'bytes32', 'bytes32', 'uint256', 'address'],
      [
        solidityKeccak256(
          ['string'],
          ['EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)']
        ),
        solidityKeccak256(['string'], ['InfinityComplication']),
        solidityKeccak256(['string'], ['1']), // for versionId = 1
        chainId,
        verifyingContractAddress
      ]
    )
  );
  return domainSeparator;
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
