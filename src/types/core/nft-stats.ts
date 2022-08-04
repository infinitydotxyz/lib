import { NftImageDto } from '../dto/collections/nfts/nft-image.dto';
import { ZoraContent } from '../services/zora';
import { ChainId } from './ChainId';
import { CollectionLinkData } from './CollectionStats';
import { NftSalesStats } from './Stats';

export interface NftLinkData {
  nftName: string;

  nftTitle: string;

  nftSlug: string;

  rarityRank: number | null;

  rarityScore: number | null;

  images: {
    image: NftImageDto | null;
    zoraImage: ZoraContent | null;
    zoraContent: ZoraContent | null;
    alchemyCachedImage: string;
  };
}

export interface NftStats extends NftSalesStats, CollectionLinkData, NftLinkData {
  chainId: ChainId;
  collectionAddress: string;
  tokenId: string;
  tokenIdNumber: number | null;
}
