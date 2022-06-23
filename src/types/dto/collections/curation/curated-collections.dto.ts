import { CuratedCollection } from '../../../core/CuratedCollection';
import { CollectionDto } from '../collection.dto';

export class CuratedCollectionsDto {
  data: {
    collections: CollectionDto[];
    curated: CuratedCollection[];
  };
  cursor?: string;
  hasNextPage: boolean;
}
