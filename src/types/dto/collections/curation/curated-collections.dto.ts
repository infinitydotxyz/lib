import { CuratedCollectionDto } from './curated-collection.dto';

export class CuratedCollectionsDto {
  data: CuratedCollectionDto[];
  cursor?: string;
  hasNextPage: boolean;
}
