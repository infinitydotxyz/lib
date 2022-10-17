import { CollectionDisplayData } from './CollectionDisplayData';
import { TokenStandard } from './Token';

export interface NftDisplayData {
  collectionDisplayData: CollectionDisplayData;

  tokenId: string;

  name: string;

  numTraitTypes: number;

  image: string;

  tokenStandard: TokenStandard;
}
