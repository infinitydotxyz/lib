import { WyvernAssetData } from '../protocols/wyvern/WyvernOrder';
import { Asset } from './Asset';

export interface OpenSeaAsset extends Asset {
  rawData?: WyvernAssetData;
}
