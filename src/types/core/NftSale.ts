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
  source: string;
  isAggregated: boolean;
  isDeleted: boolean;
  isFeedUpdated: boolean;
}

export interface ExternalNftSale extends BaseNftSale {
  source: string;
}

export interface InfinityNftSale extends BaseNftSale {
  source: 'infinity';
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
