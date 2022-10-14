import { join } from 'path';
import { InfinityLink, InfinityLinkType } from '../types/core/InfinityLink';

export function joinUrl(...parts: string[]): string {
  return new URL(join(...parts)).toString();
}

export function getInfinityLink(link: InfinityLink) {
  const baseUrl = 'https://infinity.xyz';

  switch (link.type) {
    case InfinityLinkType.Asset:
      return joinUrl(baseUrl, 'asset', link.chainId, link.collectionAddress, link.tokenId);

    case InfinityLinkType.Collection:
      return joinUrl(baseUrl, 'collection', link.addressOrSlug);

    default:
      throw new Error(`Link type ${(link as any)?.type} not yet implemented`);
  }
}
