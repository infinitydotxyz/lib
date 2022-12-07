import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { formatEther } from '@ethersproject/units/lib';

export function jsonString(obj?: object) {
  return JSON.stringify(obj, null, 2);
}

export function getSearchFriendlyString(input?: string) {
  if (!input) {
    return '';
  }
  // remove spaces, dashes and underscores only
  const output = input.replace(/[\s-_]/g, '');
  return output.toLowerCase();
}

export function trimLowerCase(str?: string) {
  return (str || '').trim().toLowerCase();
}

export function getEndCode(searchTerm: string) {
  // Firebase doesn't have a clean way of doing starts with so this boilerplate code helps prep the query
  const strLength = searchTerm.length;
  const strFrontCode = searchTerm.slice(0, strLength - 1);
  const strEndCode = searchTerm.slice(strLength - 1, searchTerm.length);
  const endCode = strFrontCode + String.fromCharCode(strEndCode.charCodeAt(0) + 1);
  return endCode;
}

export function normalizeAddress(address: string) {
  return address.trim().toLowerCase();
}

export function formatEth(wei: string | bigint | number, decimals?: number): number {
  const full = parseFloat(formatEther(BigInt(wei).toString()));
  if (typeof decimals === 'number' && !Number.isNaN(decimals)) {
    return round(full, decimals);
  }
  return full;
}

export function round(value: number, decimals = 4): number {
  return Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

export function toLexicographicalStr(value: BigNumberish, maxBits = 64) {
  const str = BigNumber.from(value).toString();
  const length = BigNumber.from(2).pow(maxBits).toString().length;
  return str.padStart(length, '0');
}
