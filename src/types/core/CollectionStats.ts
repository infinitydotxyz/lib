import { ChainId } from './ChainId';
import { SocialsStats } from './SocialsStats';
import { CollectionSalesStats } from './Stats';

export interface CollectionLinkData {
  name: string;

  chainId: ChainId;

  collectionAddress: string;

  profileImage: string;

  bannerImage: string;

  slug: string;

  hasBlueCheck: boolean;
}

export interface CollectionStats extends CollectionSalesStats, SocialsStats, CollectionLinkData {}
