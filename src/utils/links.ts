import { join } from 'path';
import { InfinityLink, InfinityLinkType } from '../types/core/InfinityLink';

export function joinUrl(...parts: string[]): string {
    return new URL(join(...parts)).toString();
}

export function getInfinityRelativeLink(link: InfinityLink) {
    const baseUrl = '/';

    switch (link.type) {
        case InfinityLinkType.Asset:
            return joinUrl( baseUrl, 'assets', link.collectionAddress, link.tokenId);

        case InfinityLinkType.Collection:
            return joinUrl(baseUrl, 'collection', link.addressOrSlug);

        default:
            throw new Error(`Link type ${(link as any)?.type} not yet implemented`)
    }
}
