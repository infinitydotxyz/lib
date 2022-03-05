import { AlchemyUserAssetResponse, AlchemyUserAsset } from './services/alchemy/AlchemyUserAsset';
import { CovalentWalletBalanceItem } from './services/covalent/CovalentNFTMetadata';
import { UnmarshalNFTAsset, UnmarshalUserAssetResponse } from './services/unmarshal/UnmarshalUserAsset';
import { WyvernAssetData } from './wyvern/WyvernOrder';
export interface AssetResponse extends AlchemyUserAssetResponse, UnmarshalUserAssetResponse {
    count: number;
    assets: AlchemyUserAsset[] | WyvernAssetData[] | CovalentWalletBalanceItem[] | UnmarshalNFTAsset[];
}
