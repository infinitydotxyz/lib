import { ChainId } from '../ChainId';

export enum EntrantLedgerItemVariant {
  TransactionStats = 'TRANSACTION_STATS',
  Offer = 'OFFER',
  Listing = 'LISTING'
}

export interface EntrantLedgerItemBase {
  discriminator: EntrantLedgerItemVariant;
  chainId: ChainId;
  updatedAt: number;
  isAggregated: boolean;
  entrantAddress: string;
}

export interface EntrantFeesLedgerItem extends EntrantLedgerItemBase {
  discriminator: EntrantLedgerItemVariant.TransactionStats;
  phaseId: string;
  phaseName: string;
  phaseIndex: number;
  volumeEth: number;
  volumeWei: string;
  volumeUSDC: number;
  userSells: number;
  userBuys: number;
  protocolFeesWei: string;
  protocolFeesEth: number;
  protocolFeesUSDC: number;
}

export interface EntrantOrderItem {
  isTopCollection: boolean;
  isSellOrder: boolean;
  startTimeMs: number;
  endTimeMs: number;
  hasBlueCheck: boolean;
  collectionAddress: string;
  collectionSlug: string;
  floorPriceEth: number;
  startPriceEth: number;
  endPriceEth: number;
  tokenId: string;
  numTokens: number;
  makerAddress: string;
}

export interface EntrantOrderLedgerItem extends EntrantLedgerItemBase {
  discriminator: EntrantLedgerItemVariant.Offer | EntrantLedgerItemVariant.Listing;
  order: {
    id: string;
    chainId: ChainId;
    numItems: number;
    items: EntrantOrderItem[];
  };
  blockNumber: number;
  stakeLevel: number;
}

export interface PreMergeEntrantOrderLedgerItem extends Omit<EntrantOrderLedgerItem, 'stakeLevel'> {
  discriminator: EntrantLedgerItemVariant.Offer | EntrantLedgerItemVariant.Listing;
  order: {
    id: string;
    chainId: ChainId;
    numItems: number;
    items: EntrantOrderItem[];
  };
  blockNumber: number;
  isMerged: boolean;
}

export type EntrantLedgerItem = EntrantFeesLedgerItem | EntrantOrderLedgerItem;
