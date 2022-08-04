import { NftImageDto } from '../dto/collections/nfts/nft-image.dto';
import { CollectionStats } from './CollectionStats';

export interface NftLinkData {
  nftName: string;

  nftTitle?: string;

  nftSlug?: string;

  rarityRank?: number;

  rarityScore?: number;

  nftImage: NftImageDto;
}

export interface NftStats extends CollectionStats, NftLinkData {
  tokenId: string;
  tokenIdNumber?: number;
}
