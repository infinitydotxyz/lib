import { ApiProperty } from '@nestjs/swagger';
import { CollectionDto } from '../collection.dto';

export class CuratedCollectionDto extends CollectionDto {
  /**
   * The amount of curation votes from the (currenly connected) user.
   */
  @ApiProperty({ description: 'The amount of curation votes from the user' })
  numUserCuratedVotes?: number;
}
