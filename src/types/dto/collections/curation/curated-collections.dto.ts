import { Collection } from '../../../core/Collection';

export class CuratedCollectionsDto {
  collections: Collection[];
  cursor?: string;
  hasNextPage: boolean;
}
