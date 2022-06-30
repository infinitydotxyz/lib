import { Collection } from '../../../core/Collection';

export class CuratedCollectionsDto {
  data: Collection[];
  cursor?: string;
  hasNextPage: boolean;
}
