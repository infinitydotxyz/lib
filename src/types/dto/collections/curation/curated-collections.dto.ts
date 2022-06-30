import { CuratedCollection } from '../../../core';

export class CuratedCollectionsDto {
  data: CuratedCollection[];
  cursor?: string;
  hasNextPage: boolean;
}
