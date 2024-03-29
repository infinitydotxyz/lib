import { BigNumber } from '@ethersproject/bignumber';
import { StakeAmount, StakeInfo } from '../types/core';
import { formatEth } from './formatters';

export async function sleep(ms: number) {
  return await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

export function deepCopy(object: any) {
  return JSON.parse(JSON.stringify(object));
}

export function getWeekNumber(d: Date) {
  // Copy date so don't modify original
  const date = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));

  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  date.setUTCDate(date.getUTCDate() + 4 - (date.getUTCDay() || 7));
  // Get first day of year
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  // Calculate full weeks to nearest Thursday
  const weekNo = Math.ceil((((date as any) - (yearStart as any)) / 86400000 + 1) / 7);
  // Return array of year and week number
  return [date.getUTCFullYear(), weekNo];
}

export function getNextWeek(weekNumber: number, year: number) {
  const nextWeek = (weekNumber + 1) % 53;
  return nextWeek === 0 ? [year + 1, nextWeek + 1] : [year, nextWeek];
}

export function hexToDecimalTokenId(tokenId: string): string {
  if (tokenId?.startsWith('0x')) {
    return BigNumber.from(tokenId).toBigInt().toString();
  }

  return tokenId;
}

export const nowSeconds = (): BigNumber => {
  return BigNumber.from(Math.floor(Date.now() / 1000));
};

export function getTotalStaked(stakeInfo: StakeInfo, precision = 4): number {
  const totalStakedWad: bigint = Object.values(stakeInfo).reduce(
    (acc: bigint, item: StakeAmount) => acc + BigInt(item.amount),
    BigInt(0)
  );
  const totalStaked = formatEth(totalStakedWad.toString(), precision);
  return totalStaked;
}

export function getStakePowerPerToken(stakeInfo: StakeInfo, stakePower: number) {
  const totalStaked = getTotalStaked(stakeInfo, 18);
  const stakePowerPerToken = stakePower / totalStaked;
  return stakePowerPerToken;
}
