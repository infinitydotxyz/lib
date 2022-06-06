import { trimLowerCase } from './formatters';
import { isAddress } from '@ethersproject/address';

export function getCollectionDocId(collection: { collectionAddress: string; chainId: string }) {
  if (!isAddress(collection.collectionAddress)) {
    throw new Error('Invalid collection address');
  }
  return `${collection.chainId}:${trimLowerCase(collection.collectionAddress)}`;
}

/**
 * Encodes a document id containing invalid characters.
 *
 * @see https://firebase.google.com/docs/firestore/quotas#collections_documents_and_fields
 */
export function encodeDocId(value: string) {
  return encodeURIComponent(value).replace(/\./g, '%2E');
}

/**
 * Decodes a document id containing invalid characters.
 *
 * @see https://firebase.google.com/docs/firestore/quotas#collections_documents_and_fields
 */
export function decodeDocId(value: string) {
  return decodeURIComponent(value.replace('%2E', '.'));
}
