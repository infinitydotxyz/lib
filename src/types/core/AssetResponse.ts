import { WyvernAssetData } from '../protocols/wyvern/WyvernOrder';
import { AlchemyUserAssetResponse, AlchemyUserAsset } from '../services/alchemy/AlchemyUserAsset';
import { CovalentWalletBalanceItem } from '../services/covalent/CovalentNFTMetadata';
import { UnmarshalUserAssetResponse, UnmarshalNFTAsset } from '../services/unmarshal/Unmarshal';

export interface AssetResponse extends AlchemyUserAssetResponse, UnmarshalUserAssetResponse {
  count: number;
  assets: AlchemyUserAsset[] | WyvernAssetData[] | CovalentWalletBalanceItem[] | UnmarshalNFTAsset[];
}
