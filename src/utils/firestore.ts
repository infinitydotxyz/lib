import { trimLowerCase } from './formatters';
import { isAddress } from '@ethersproject/address';

export function getCollectionDocId(collection: { collectionAddress: string; chainId: string }) {
  if (!isAddress(collection.collectionAddress)) {
    throw new Error('Invalid collection address');
  }
  return `${collection.chainId}:${trimLowerCase(collection.collectionAddress)}`;
}
