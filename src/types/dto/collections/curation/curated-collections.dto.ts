import { CollectionDto } from '../collection.dto';

export class CuratedCollectionsDto {
  data: CollectionDto[];
  cursor?: string;
  hasNextPage: boolean;
}
