import { ApiProperty } from '@nestjs/swagger';
import { UserFeedEvent } from '../../core/feed';

export class UserActivityArrayDto {
  @ApiProperty({
    description: 'Array of user activities'
  })
  data: UserFeedEvent[];

  @ApiProperty({ description: 'Cursor that can be used to get the next page' })
  cursor: string;

  @ApiProperty({ description: 'Whether there are more results available' })
  hasNextPage: boolean;
}
