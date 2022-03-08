import { Metadata } from './NftInterface';

export interface Order {
  id?: string;
  blueCheck?: boolean;
  metadata?: Metadata;
  hasBonusReward?: boolean;
  listingTime: string;
  v: number;
  extra: string;
  takerRelayerFee: string;
  feeRecipient: string;
  takerProtocolFee: string;
  staticTarget: string;
  side: number;
  basePrice: string;
  salt: string;
  r: string;
  howToCall: number;
  exchange: string;
  s: string;
  feeMethod: number;
  expirationTime: string;
  replacementPattern: string;
  saleKind: number;
  quantity: string;
  maker: string;
  makerProtocolFee: string;
  calldata: string;
  makerReferrerFee: string;
  taker: string;
  target: string;
  hash: string;
  makerRelayerFee: string;
  staticExtradata: string;
  paymentToken: string;
  chainId?: string;
}
