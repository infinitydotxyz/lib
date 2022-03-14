import crypto from 'crypto';
import { trimLowerCase } from './formatters';
import { utils } from 'ethers';

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

export function getCollectionDocId(collection: {collectionAddress: string, chainId: string}) {
  if (!utils.isAddress(collection.collectionAddress)) {
    throw new Error('Invalid collection address');
  }
  return `${collection.chainId}:${trimLowerCase(collection.collectionAddress)}`;
}
