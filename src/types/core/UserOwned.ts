import { BaseToken, TokenStandard } from './Token';

export type UserOwnedCollection = {
  chainId: string;
  collectionAddress: string;
  collectionSlug: string;
  collectionName: string;
  collectionDescription: string;
  collectionSymbol: string;
  collectionProfileImage: string;
  collectionBannerImage: string;
  displayType: string;
  hasBlueCheck: boolean;
  tokenStandard: TokenStandard;
  numCollectionNftsOwned: number;
};

export type UserOwnedToken = Omit<UserOwnedCollection, 'numCollectionNftsOwned'> &
  Omit<BaseToken, 'chainId, collectionAddress, collectionSlug, collectionName, hasBlueCheck'>;
