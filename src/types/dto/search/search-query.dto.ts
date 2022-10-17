import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEnum, IsNumber, IsString } from 'class-validator';
import { parseIntTransformer } from '../../../transformers';
import { ChainId } from '../../core';
import { SearchBy, SearchQuery, SearchType } from '../../core/search/search-query';

export class SearchQueryDto<T extends SearchType, U extends SearchBy<T>> implements SearchQuery<T, U> {
  @ApiProperty({
    description: 'The type of search to perform',
    enum: SearchType
  })
  @IsEnum(SearchType)
  type: T;

  @ApiProperty({
    description: 'The cursor to get the next page'
  })
  @IsString()
  cursor: string;

  @ApiProperty({
    description: 'Number of results to get. Max of 20'
  })
  @IsNumber()
  @Transform(parseIntTransformer({ max: 20 }))
  limit: number;

  @ApiProperty({
    description: 'Chain ID to search on'
  })
  @IsEnum(ChainId)
  chainId: ChainId;

  @ApiProperty({
    description: 'The main search query corresponding to the search type'
  })
  query: string;

  @ApiProperty({
    description: 'The field to search by'
  })
  @IsString()
  searchBy: U;
}
