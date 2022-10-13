import { PickType } from '@nestjs/swagger';
import { TokenomicsPhaseDto } from '../../rewards';

export class FavoriteCollectionPhaseDto extends PickType(TokenomicsPhaseDto, [
  'id',
  'name',
  'isActive',
  'progress',
  'collectionPotFeesGenerated'
]) {
  expectedPrizePoolUSDC: number;
}
