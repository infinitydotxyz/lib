import { FeesGeneratedDto } from '../../dto';
import { ChainId } from '../ChainId';
import { UserDisplayData } from '../UserDisplayData';

export interface ReferralTotals {
  referralLink: string;
  referrer: UserDisplayData;
  metadata: {
    chainId: ChainId;
    updatedAt: number;
  };
  stats: {
    numReferrals: number;
    numReferralSales: number;
    totalFeesGenerated: FeesGeneratedDto;
  };
}
