import { ChainId } from './ChainId';

export interface Erc20TokenMetadata {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  chainId: ChainId;
}
