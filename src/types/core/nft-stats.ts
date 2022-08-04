import { ChainId } from '../../../frontend/dist/types/core';
import { NftSalesStats } from '../../../frontend/dist/types/core/Stats';
import { NftImageDto } from '../dto/collections/nfts/nft-image.dto';
import { CollectionLinkData } from './CollectionStats';

export interface NftLinkData {
  nftName: string;

  nftTitle?: string;

  nftSlug?: string;

  rarityRank?: number;

  rarityScore?: number;

  nftImage: NftImageDto;
}

export interface NftStats extends NftSalesStats, CollectionLinkData, NftLinkData {
  chainId: ChainId;
  collectionAddress: string;
  tokenId: string;
  tokenIdNumber?: number;
}
