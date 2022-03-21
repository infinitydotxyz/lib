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

export const getStatsTimestamp = (timestamp: number, period: StatsPeriod): number => {
  const formattedDate = getFormattedStatsDate(timestamp, period);
  const statTimestamp = getTimestampFromFormattedDate(formattedDate, period);
  return statTimestamp;
}

/**
 * Firestore historical document id based on date and period
 */
function getFormattedStatsDate(timestamp: number, period: StatsPeriod): string {
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
function getTimestampFromFormattedDate(formattedDate: string, period: StatsPeriod) {
  switch (period) {
    case StatsPeriod.All:
      return Date.now();
    case StatsPeriod.Yearly:
    case StatsPeriod.Monthly:
    case StatsPeriod.Weekly:
    case StatsPeriod.Daily:
      return new Date(formattedDate).getTime();
    case StatsPeriod.Hourly:
      const [year, month, day, hour] = formattedDate.split('-');
      return new Date(`${year}-${month}-${day}T${hour}:00`).getTime();
    default:
      throw new Error(`Period: ${period as string} not yet implemented`);
  }
}

