import { ChainId } from './ChainId';

export interface CollectionDisplayData {
  chainId: ChainId;

  address: string;

  hasBlueCheck: boolean;

  slug: string;

  name: string;

  profileImage: string;

  bannerImage: string;
}
