import { ChainId } from './ChainId';

export interface UserNonce {
  nonce: string;
  userAddress: string;
  chainId: ChainId;
  contractAddress: string;
  fillability: 'fillable' | 'cancelled' | 'filled';
}
