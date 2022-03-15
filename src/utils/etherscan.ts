import { join } from 'path';
import { EtherscanLink, EtherscanLinkType } from '../types/core/Etherscan';

export function getEtherscanLink(linkData: EtherscanLink): string {
    const baseUrl = 'https://etherscan.io/';
    const getUrl = (path: string, data: string): string => {
        return new URL(join(baseUrl, path, data)).toString();
    }

    switch (linkData.type) {
        case EtherscanLinkType.Address:
            return getUrl('address', linkData.address);

        case EtherscanLinkType.Block:
            return getUrl('block', `${linkData.blockNumber}`);

        case EtherscanLinkType.Token:
            return getUrl('token', linkData.tokenAddress);

        case EtherscanLinkType.Transaction:
            return getUrl('tx', linkData.transactionHash);

        default:
            throw new Error(`Etherscan link type ${(linkData as any)?.type} not yet implemented`);
    }
}
