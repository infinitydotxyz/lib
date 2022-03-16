export enum EtherscanLinkType {
  Transaction = 'tx',
  Address = 'address',
  Block = 'block',
  Token = 'token'
}

interface EtherscanLinkData {
  type: EtherscanLinkType;
}

export interface EtherscanTransactionLink extends EtherscanLinkData {
  type: EtherscanLinkType.Transaction;
  transactionHash: string;
}

export interface EtherscanAddressLink extends EtherscanLinkData {
  type: EtherscanLinkType.Address;
  address: string;
}

export interface EtherscanBlockLink extends EtherscanLinkData {
  type: EtherscanLinkType.Block;
  blockNumber: string | number;
}

export interface EtherscanTokenLink extends EtherscanLinkData {
  type: EtherscanLinkType.Token;
  tokenAddress: string;
}

export type EtherscanLink = EtherscanTransactionLink | EtherscanAddressLink | EtherscanBlockLink | EtherscanTokenLink;
