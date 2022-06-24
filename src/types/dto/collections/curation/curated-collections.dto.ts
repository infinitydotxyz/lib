import { Collection } from '../../../core/Collection';
import { CuratedCollection } from '../../../core/CuratedCollection';

export class CuratedCollectionsDto {
  data: {
    collections: Collection[];
    curations: CuratedCollection[];
  };
  cursor?: string;
  hasNextPage: boolean;
}
