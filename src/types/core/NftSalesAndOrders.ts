export interface NftSalesAndOrder {
  dataType: 'Sale' | 'Listing' | 'Offer';
  priceEth: number;
  timestamp: number;
}
