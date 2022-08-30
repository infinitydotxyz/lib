import { InfinityNftSale } from '../NftSale';

type Split<T> = T & { isSplit?: true };

export type RewardSaleEvent = Split<InfinityNftSale & { ethPrice: number; docId: string; updatedAt: number }>;

export type RewardEvent = RewardSaleEvent;
