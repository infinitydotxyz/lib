import { trimLowerCase } from './formatters';
import { isAddress } from '@ethersproject/address';

export function getCollectionDocId(collection: { collectionAddress: string; chainId: string }) {
  if (!isAddress(collection.collectionAddress)) {
    throw new Error('Invalid collection address');
  }
  return `${collection.chainId}:${trimLowerCase(collection.collectionAddress)}`;
}

export function getAttributeDocId(input: string) {
  if (!input) {
    throw new Error('Invalid attribute input');
  }
  // remove spaces, dashes, dots, underscores, slashes
  const output = input.replace(/[\s-._/\\]/g, '');
  return output.toLowerCase();
}
