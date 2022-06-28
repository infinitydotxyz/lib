import { ChainId } from '../types/core';
import { EtherscanLink, EtherscanLinkType } from '../types/core/Etherscan';
import { joinUrl } from './links';

export function getEtherscanLink(linkData: EtherscanLink, chainId?: ChainId): string {
  let baseUrl = 'https://etherscan.io/';
  if (chainId === ChainId.Goerli) {
    baseUrl = 'https://goerli.etherscan.io/';
  } else if (chainId === ChainId.Polygon) {
    baseUrl = 'https://polygonscan.io/';
  }

  switch (linkData.type) {
    case EtherscanLinkType.Address:
      return joinUrl(baseUrl, 'address', linkData.address);

    case EtherscanLinkType.Block:
      return joinUrl(baseUrl, 'block', `${linkData.blockNumber}`);

    case EtherscanLinkType.Token:
      return joinUrl(baseUrl, 'token', linkData.tokenAddress);

    case EtherscanLinkType.Transaction:
      return joinUrl(baseUrl, 'tx', linkData.transactionHash);

    default:
      throw new Error(`Etherscan link type ${(linkData as any)?.type} not yet implemented`);
  }
}
