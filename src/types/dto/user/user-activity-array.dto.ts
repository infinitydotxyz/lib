import { ApiProperty } from '@nestjs/swagger';
import { NftListingEvent, NftOfferEvent, NftSaleEvent } from '../../core/feed';

export type UserActivity = NftSaleEvent | NftListingEvent | NftOfferEvent;

export class UserActivityArrayDto {
  @ApiProperty({
    description: 'Array of user activities. NftListingEvent | NftSaleEvent | NftOfferEvent'
  })
  data!: UserActivity[];

  @ApiProperty({ description: 'Cursor that can be used to get the next page' })
  cursor!: string;

  @ApiProperty({ description: 'Whether there are more results available' })
  hasNextPage!: boolean;
}
