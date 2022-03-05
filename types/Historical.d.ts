import { StringNumber } from './UtilityTypes';
export declare type Hourly<Data> = Record<StringNumber, Data>;
export interface WithTimestamp {
    timestamp: number;
}
export declare type HistoricalWeek<Data extends WithTimestamp, Aggregated extends WithTimestamp> = Hourly<Data> & {
    aggregated: Aggregated;
};
