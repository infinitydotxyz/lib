import { InfinityOrderData } from './InfinityOrderData';
import { ListingMetadata } from './ListingMetadata';
import { Order } from './Order';
export declare type Listing = ListingWithOrder | ListingWithoutOrder;
export declare type ListingWithOrder = Order & ListingWithoutOrder;
export interface ListingWithoutOrder extends InfinityOrderData {
    id: string;
    metadata: ListingMetadata;
    rawData?: any;
}
