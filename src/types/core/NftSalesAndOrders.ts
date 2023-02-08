export interface NftSaleAndOrder {
  dataType: 'Sale' | 'Listing' | 'Offer';
  priceEth: number;
  timestamp: number;
}
