import { ethers } from 'ethers';
import { ChainId } from '../types/core/ChainId';

export function getChainId(chain: string) {
  if (chain.trim().toLowerCase() === 'ethereum') {
    return '1';
  } else if (chain.trim().toLowerCase() === 'polygon') {
    return '137';
  } else if (chain.trim().toLowerCase() === 'localhost') {
    return '31337';
  }
  return '';
}

export function getNetworkish(chainId: ChainId) {
  const network = ethers.providers.getNetwork(chainId);
  return {
    chainId: network.chainId,
    name: network.name,
    ensAddress: network.ensAddress
  }
}
