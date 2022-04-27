


export interface WithTimestamp {
  timestamp: number;
}

export type HistoricalWeek<Data extends WithTimestamp, Aggregated extends WithTimestamp> = any