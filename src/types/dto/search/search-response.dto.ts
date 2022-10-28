import { CollectionDisplayData, NftDisplayData } from '../../core';

export class SearchResponseDto {
  data: CollectionDisplayData[] | NftDisplayData[];
  cursor: string;
  hasNextPage: boolean;
}
