import { FeesGeneratedDto } from '../../dto';
import { ChainId } from '../ChainId';

export interface TreasuryDoc {
  chainId: ChainId;
  feesGenerated: Omit<FeesGeneratedDto, 'feesGeneratedUSDC'>;
  phases: {
    [id: string]: {
      phaseName: string;
      phaseId: string;
      phaseIndex: number;
      feesGenerated: Omit<FeesGeneratedDto, 'feesGeneratedUSDC'>;
    };
  };
}
