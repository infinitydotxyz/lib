import { ApiProperty, PickType } from '@nestjs/swagger';
import { TokenomicsPhaseDto } from '../../rewards';
import { CollectionFavoriteDto } from './favorites.dto';

export class FavoriteCollectionPhaseDto extends PickType(TokenomicsPhaseDto, ['id', 'name', 'isActive', 'progress']) {
  @ApiProperty({
    description: 'User favorited collection. Undefined when no collection has been favorited yet'
  })
  userFavoriteCollection?: CollectionFavoriteDto;
}
