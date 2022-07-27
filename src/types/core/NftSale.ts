import { TokenStandard } from './Token';
import { Optional } from './UtilityTypes';

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
  source: SaleSource;
}

export interface ExternalNftSale extends BaseNftSale {
  source: SaleSource.OpenSea | SaleSource.Seaport;
}

export interface InfinityNftSale extends BaseNftSale {
  source: SaleSource.Infinity;
  protocolFeeBPS: number;
  protocolFee: number;
  protocolFeeWei: string;
}

export type NftSale = ExternalNftSale | InfinityNftSale;
export interface NftSaleUnion
  extends Omit<ExternalNftSale, 'source'>,
    Optional<Omit<InfinityNftSale, 'source'>, 'protocolFeeBPS' | 'protocolFee' | 'protocolFeeWei'>,
    Pick<BaseNftSale, 'source'> {}

export class NftSalesResponse {
  data: NftSaleUnion[];
  cursor: string | undefined;
  hasNextPage: boolean;
}
