import { TokenStandard } from './Token';

export enum SaleSource {
  Seaport = 'SEAPORT',
  OpenSea = 'OPENSEA',
  Infinity = 'INFINITY'
}

export interface BaseNftSale {
  chainId: string;
  txHash: string;
  blockNumber: number;
  timestamp: number;
  collectionAddress: string;
  tokenId: string;
  price: number;
  paymentToken: string;
  buyer: string;
  seller: string;
  quantity: number;
  tokenStandard: TokenStandard;
}

export interface OpenSeaNftSale extends BaseNftSale {
  source: SaleSource.OpenSea;
}

export interface SeaportNftSale extends BaseNftSale {
  source: SaleSource.Seaport;
}
export interface InfinityNftSale {
  source: SaleSource.Infinity;
  protocolFeeBPS: string;
  protocolFee: string;
}

export type NftSale = OpenSeaNftSale | SeaportNftSale | InfinityNftSale;
