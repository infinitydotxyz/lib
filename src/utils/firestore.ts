import crypto from 'crypto';
import { trimLowerCase } from './formatters';
import { utils } from 'ethers';
import { StatsPeriod } from '../types/core/StatsPeriod';
import moment from 'moment';
import { firestoreConstants } from './constants';

export function getDocIdHash({
  collectionAddress,
  tokenId,
  chainId
}: {
  collectionAddress: string;
  tokenId: string;
  chainId: string;
}) {
  const data = chainId.trim() + '::' + trimLowerCase(collectionAddress) + '::' + tokenId.trim();
  return crypto.createHash('sha256').update(data).digest('hex').trim().toLowerCase();
}

export function getCollectionDocId(collection: { collectionAddress: string; chainId: string }) {
  if (!utils.isAddress(collection.collectionAddress)) {
    throw new Error('Invalid collection address');
  }
  return `${collection.chainId}:${trimLowerCase(collection.collectionAddress)}`;
}

/**
 * Firestore historical document id based on date and period
 */
export const getStatsDocId = (timestamp: number, period: StatsPeriod): string => {
  const date = new Date(timestamp);
  const firstDayOfWeek = date.getDate() - date.getDay();

  switch (period) {
    case StatsPeriod.Hourly:
      return moment(date).format('YYYY-MM-DD-HH');
    case StatsPeriod.Daily:
      return moment(date).format('YYYY-MM-DD');
    case StatsPeriod.Weekly:
      return moment(date.setDate(firstDayOfWeek)).format('YYYY-MM-DD');
    case StatsPeriod.Monthly:
      return moment(date).format('YYYY-MM');
    case StatsPeriod.Yearly:
      return moment(date).format('YYYY');
    case StatsPeriod.All:
      return 'allTime';
    default:
      throw new Error(`Period: ${period as string} not yet implemented`);
  }
};

/**
 * returns the timestamp corresponding to the stats docId
 */
export function getTimestampFromStatsDocId(docId: string, period: StatsPeriod) {
  switch (period) {
    case StatsPeriod.All:
      return Date.now();
    case StatsPeriod.Yearly:
    case StatsPeriod.Monthly:
    case StatsPeriod.Weekly:
    case StatsPeriod.Daily:
      return new Date(docId).getTime();
    case StatsPeriod.Hourly:
      const [year, month, day, hour] = docId.split('-');
      return new Date(`${year}-${month}-${day}T${hour}:00`).getTime();
    default:
      throw new Error(`Period: ${period as string} not yet implemented`);
  }
}

/**
 *
 *
 * get stats collection name
 *
 */
export enum StatsType {
  Nft = 'nft',
  Collection = 'collection'
}

const statsCollections = {
  [StatsPeriod.All]: {
    [StatsType.Collection]: firestoreConstants.COLLECTION_STATS_ALL_TIME_COLL,
    [StatsType.Nft]: firestoreConstants.NFT_STATS_ALL_TIME_COLL
  },
  [StatsPeriod.Daily]: {
    [StatsType.Collection]: firestoreConstants.COLLECTION_STATS_DAILY_COLL,
    [StatsType.Nft]: firestoreConstants.NFT_STATS_DAILY_COLL
  },
  [StatsPeriod.Hourly]: {
    [StatsType.Collection]: firestoreConstants.COLLECTION_STATS_HOURLY_COLL,
    [StatsType.Nft]: firestoreConstants.NFT_STATS_HOURLY_COLL
  },
  [StatsPeriod.Weekly]: {
    [StatsType.Collection]: firestoreConstants.COLLECTION_STATS_WEEKLY_COLL,
    [StatsType.Nft]: firestoreConstants.NFT_STATS_WEEKLY_COLL
  },
  [StatsPeriod.Monthly]: {
    [StatsType.Collection]: firestoreConstants.COLLECTION_STATS_MONTHLY_COLL,
    [StatsType.Nft]: firestoreConstants.NFT_STATS_MONTHLY_COLL
  },
  [StatsPeriod.Yearly]: {
    [StatsType.Collection]: firestoreConstants.COLLECTION_STATS_YEARLY_COLL,
    [StatsType.Nft]: firestoreConstants.NFT_STATS_YEARLY_COLL
  }
};

export const getStatsCollName = (period: StatsPeriod, type: StatsType) => {
  const collectionName = statsCollections?.[period]?.[type];
  if (!collectionName) {
    throw new Error(`Invalid period: ${period} or type: ${type}`);
  }
  return collectionName;
};
