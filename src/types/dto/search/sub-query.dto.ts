import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { SearchBy, SearchType, SubQuery, SubQuerySearchBy, SubQueryType } from '../../core/search/search-query';
import { SearchQueryDto } from './search-query.dto';

export class SubQueryDto<T extends SearchType, U extends SearchBy<T>, V extends SubQueryType<T, U>>
  extends SearchQueryDto<T, U>
  implements SubQuery<T, U, V>
{
  @ApiPropertyOptional({
    description: 'The sub type of search to perform'
  })
  @IsOptional()
  @IsString()
  subType: V;

  @ApiPropertyOptional({
    description: 'The sub type search query'
  })
  @IsOptional()
  @IsString()
  subTypeQuery: string;

  @ApiPropertyOptional({
    description: 'The value to search by in the sub query'
  })
  @IsOptional()
  @IsString()
  subTypeSearchBy: SubQuerySearchBy<T, U, V>;
}
