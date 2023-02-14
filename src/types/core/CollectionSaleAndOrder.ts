export interface CollectionSaleAndOrder {
  id: string;
  dataType: 'Sale' | 'Listing' | 'Offer';
  timestamp: number;
  tokenImage: string;
  tokenId: string;
  priceEth: number;
}
