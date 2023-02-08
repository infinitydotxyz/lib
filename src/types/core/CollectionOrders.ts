export interface CollectionOrder {
  id: string;
  isSellOrder: boolean;
  tokenId: string;
  tokenImage: string;
  priceEth: number;
  maker: string;
  isPrivate: boolean;
}
