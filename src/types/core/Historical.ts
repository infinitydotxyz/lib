/* eslint-disable @typescript-eslint/no-unused-vars */
export interface WithTimestamp {
  timestamp: number;
}

export type HistoricalWeek<Data extends WithTimestamp, Aggregated extends WithTimestamp> = any;
