import { TokenStandard } from './Token';
import { Optional } from './UtilityTypes';
import { OrderSource } from './orderbook/order-source';

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
  source: SaleSource | OrderSource;
  isAggregated: boolean;
  isDeleted: boolean;
  isFeedUpdated: boolean;
}

export interface ExternalNftSale extends BaseNftSale {
  source: SaleSource.OpenSea | SaleSource.Seaport | OrderSource;
}

export interface InfinityNftSale extends BaseNftSale {
  source: SaleSource.Infinity;
  protocolFeeBPS: number;
  protocolFee: number;
  protocolFeeWei: string;
}

export interface FlowNftSale extends BaseNftSale {
  source: 'flow';
  protocolFeeBPS: number;
  protocolFee: number;
  protocolFeeWei: string;
}

export type NftSale = ExternalNftSale | InfinityNftSale | FlowNftSale;
export interface NftSaleUnion
  extends Omit<ExternalNftSale, 'source' | 'isAggregated' | 'isDeleted'>,
    Optional<
      Omit<InfinityNftSale, 'source' | 'isAggregated' | 'isDeleted'>,
      'protocolFeeBPS' | 'protocolFee' | 'protocolFeeWei'
    >,
    Pick<BaseNftSale, 'source'> {}

export class NftSalesResponse {
  data: NftSaleUnion[];
  cursor: string | undefined;
  hasNextPage: boolean;
}
