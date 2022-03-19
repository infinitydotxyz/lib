import crypto from 'crypto';
import { trimLowerCase } from './formatters';
import { utils } from 'ethers';
import { StatsPeriod } from '../types/core/StatsPeriod';
import moment from 'moment';

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
      throw new Error(`Invalid period: ${period}. Accepted values: ${Object.values(StatsPeriod).join(', ')}`)
  }
};
