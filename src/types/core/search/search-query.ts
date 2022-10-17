import { ChainId } from '..';

export enum SearchType {
  Collection = 'collection'
}

export type SearchTypeSearchBy = {
  [SearchType.Collection]: {
    slug: {
      // sub queries
      nft: {
        // sub query search by
        tokenId: any;
      };
    };
    address: {
      // sub queries
      nft: {
        // sub query search by
        tokenId: any;
      };
    };
  };
};

export type SearchBy<T extends SearchType> = keyof SearchTypeSearchBy[T];
export type SubQueryType<T extends SearchType, U extends SearchBy<T>> = keyof SearchTypeSearchBy[T][U];
export type SubQuerySearchBy<
  T extends SearchType,
  U extends SearchBy<T>,
  V extends SubQueryType<T, U>
> = keyof SearchTypeSearchBy[T][U][V];

export interface SearchQuery<T extends SearchType, U extends SearchBy<T>> {
  type: T;
  cursor: string;
  limit: number;
  chainId: ChainId;
  query: string;
  searchBy: U;
}

export interface SubQuery<T extends SearchType, U extends SearchBy<T>, V extends SubQueryType<T, U>>
  extends SearchQuery<T, U> {
  subType: V;
  subTypeQuery: string;
  subTypeSearchBy: SubQuerySearchBy<T, U, V>;
}
