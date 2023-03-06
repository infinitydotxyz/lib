import { FeesGeneratedDto } from '../../dto';
import { NftDisplayData } from '../nft-display-data';
import { InfinityNftSale, SaleSource } from '../NftSale';
import { UserDisplayData } from '../UserDisplayData';
import { AssetReferralDoc } from './asset-referral';

export interface BaseReferralSaleEvent {
  sale: Pick<
    InfinityNftSale,
    | 'chainId'
    | 'txHash'
    | 'blockNumber'
    | 'timestamp'
    | 'collectionAddress'
    | 'tokenId'
    | 'price'
    | 'paymentToken'
    | 'buyer'
    | 'seller'
    | 'quantity'
    | 'tokenStandard'
    | 'protocolFee'
    | 'protocolFeeBPS'
    | 'protocolFeeWei'
  > & { source: SaleSource.Infinity | 'flow' };
  referral: AssetReferralDoc;
  ethPrice: number;
  docId: string;
  referralFeesGenerated: FeesGeneratedDto;
  referralRewardPercent: number;
  updatedAt: number;
  isAggregated: boolean;
  isDeleted: boolean;
  isDisplayDataMerged: boolean;
}

export interface PreMergeReferralSaleEvent extends BaseReferralSaleEvent {
  isDisplayDataMerged: false;
}

export interface MergedReferralSaleEvent extends BaseReferralSaleEvent {
  isDisplayDataMerged: true;
  asset: NftDisplayData;
  buyer: UserDisplayData;
  seller: UserDisplayData;
  referrer: UserDisplayData;
}

export type ReferralSaleEvent = PreMergeReferralSaleEvent | MergedReferralSaleEvent;
