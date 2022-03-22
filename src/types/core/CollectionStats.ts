
import { StatsPeriod } from './StatsPeriod';
import { AllTimeStatsTimestampType } from '../../utils/constants';

export interface Stats {
  chainId: string;

  collectionAddress: string;

  tokenId?: string;

  floorPrice: number;
  prevFloorPrice: number;
  floorPricePercentChange: number;

  ceilPrice: number;
  prevCeilPrice: number;
  ceilPricePercentChange: number;

  volume: number;
  prevVolume: number;
  volumePercentChange: number;

  numSales: number;
  prevNumSales: number;
  numSalesPercentChange: number;

  avgPrice: number;
  prevAvgPrice: number;
  avgPricePercentChange: number;

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

type AllTimeStatsBase = Pick<Stats, 'chainId' | 'collectionAddress' |'tokenId' | 'floorPrice' | 'ceilPrice' | 'volume' | 'numSales' | 'avgPrice' | 'updatedAt' | 'timestamp' | 'period'>;

export interface AllTimeStats extends AllTimeStatsBase {
  timestamp: AllTimeStatsTimestampType;
}
