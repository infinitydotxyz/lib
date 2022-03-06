import { WyvernAssetData } from '../protocols/wyvern/WyvernOrder';
import { Asset } from './Asset';
import { Trait } from './Trait';

export interface OpenSeaAsset extends Asset {
  title: string;
  traits: Trait[];
  searchTitle: string;
  traitValues: (string | number)[];
  numTraits: number;
  rawData: WyvernAssetData;
  collectionName: string;
  id: string;
  description: string;
  image: string;
  searchCollectionName: string;
  address: string;
  imagePreview: string;
  traitTypes: string[];
}
