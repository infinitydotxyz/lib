import { FeesGeneratedDto } from '../../dto';
import { ChainId } from '../ChainId';
import { UserDisplayData } from '../UserDisplayData';

export interface ReferralTotals {
  referrer: UserDisplayData;
  metadata: {
    chainId: ChainId;
    updatedAt: number;
  };
  stats: {
    numReferralSales: number;
    totalFeesGenerated: FeesGeneratedDto;
  };
}
