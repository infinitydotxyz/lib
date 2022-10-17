import { FeesGeneratedDto } from '../../dto';
import { NftDisplayData } from '../nft-display-data';
import { InfinityNftSale } from '../NftSale';
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
    | 'source'
    | 'protocolFee'
    | 'protocolFeeBPS'
    | 'protocolFeeWei'
  >;
  referral: AssetReferralDoc;
  ethPrice: number;
  docId: string;
  referralFeesGenerated: FeesGeneratedDto;
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
