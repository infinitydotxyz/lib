import { WyvernAssetData } from '../protocols/wyvern/WyvernOrder';
import { Asset } from './Asset';
import { Trait } from './Trait';
export interface OpenSeaAsset extends Asset {
  rawData?: WyvernAssetData;
}
