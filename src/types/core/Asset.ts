import { Trait } from './Trait';

export interface Asset {
  id?: string;
  address?: string;
  quantity?: string;
  searchCollectionName?: string;
  searchTitle?: string;
  owner: string;
  collectionAddress: string;
  tokenId: string;
  chainId: string;
  collectionName?: string;
  collectionNameSlug?: string;
  title?: string;
  traits?: Trait[];
  titleSlug?: string;
  traitValues?: (string | number)[];
  numTraits?: number;
  description?: string;
  image?: string;
  imagePreview?: string;
  traitTypes?: string[];
}
