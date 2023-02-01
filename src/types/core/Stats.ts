import { ChainId } from './ChainId';
import { SaleSource } from './NftSale';
import { StatsPeriod } from './StatsPeriod';

export interface ProtocolFeeStats {
  minProtocolFeeWei: string | null;
  maxProtocolFeeWei: string | null;
  avgProtocolFeeWei: string | null;
  sumProtocolFeeWei: string;
  numSalesWithProtocolFee: number;
  sumProtocolFeeEth: number | null;
}
export interface BaseSalesStats {
  floorPrice: number;
  ceilPrice: number;
  volume: number;
  numSales: number;
  avgPrice: number;
}

export interface PrevBaseSalesStats {
  prevFloorPrice: number | null;
  prevCeilPrice: number | null;
  prevVolume: number | null;
  prevNumSales: number | null;
  prevAvgPrice: number | null;
}

export interface ChangeInSalesStats {
  floorPricePercentChange: number | null;
  ceilPricePercentChange: number | null;
  volumePercentChange: number | null;
  numSalesPercentChange: number | null;
  avgPricePercentChange: number | null;
}

export interface SalesStatsMetadata {
  /**
   * epoch timestamp (ms) that the stats
   * were last updated
   */
  updatedAt: number;
  /**
   * epoch timestamp (ms) corresponding to the docId
   * allows collectionGroup queries for specific
   * dates
   */
  timestamp: number;

  period: StatsPeriod;
}

export interface CollectionSalesStats
  extends BaseSalesStats,
    SalesStatsMetadata,
    PrevBaseSalesStats,
    ChangeInSalesStats,
    ProtocolFeeStats {
  chainId: ChainId;
  collectionAddress: string;
  numNfts: number | null;
  numOwners: number | null;
  volumeUSDC: number | null;
  topOwnersByOwnedNftsCount: TopOwner[];
}

export interface NftSalesStats
  extends BaseSalesStats,
    SalesStatsMetadata,
    PrevBaseSalesStats,
    ChangeInSalesStats,
    ProtocolFeeStats {
  chainId: ChainId;
  collectionAddress: string;
  tokenId: string;
}

export interface MarketplaceSalesStats
  extends BaseSalesStats,
    SalesStatsMetadata,
    PrevBaseSalesStats,
    ChangeInSalesStats,
    ProtocolFeeStats {
  chainId: ChainId;
  contractAddress: string;
  source: SaleSource;
}

export type Stats = CollectionSalesStats & { tokenId?: string };

export interface TopOwner {
  owner: string;
  count: number;
}
