import { ApiProperty } from '@nestjs/swagger';
import { FeesGeneratedDto } from './fees-generated.dto';
import { TradingFeeRefundDto } from './trading-reward.dto';

export enum TradingFeeProgram {
  Curators = 'CURATORS',
  Raffle = 'RAFFLE',
  CollectionPot = 'COLLECTION_POT',
  Treasury = 'TREASURY',
  TokenRefund = 'TOKEN_REFUND'
}

export enum TradingFeeDestination {
  Curators = TradingFeeProgram.Curators,
  Raffle = TradingFeeProgram.Raffle,
  CollectionPot = TradingFeeProgram.CollectionPot,
  Treasury = TradingFeeProgram.Treasury
}

export type TradingFeeSplit = Record<TradingFeeDestination, { percentage: number }>;

export class TokenomicsPhaseDto {
  @ApiProperty({
    description: 'Name of the phase'
  })
  name: string;

  @ApiProperty({
    description: 'Index of the phase in the phase progression'
  })
  index: number;

  @ApiProperty({
    description: 'Unique id for the phase'
  })
  id: string;

  @ApiProperty({
    description: 'Whether the phase is currently active'
  })
  isActive: boolean;

  @ApiProperty({
    description: 'Split of trading fees for the phase'
  })
  split: TradingFeeSplit;

  @ApiProperty({
    description: 'Last block included in the phase'
  })
  lastBlockIncluded: number;

  @ApiProperty({
    description: 'Progress of the phase'
  })
  progress: number;

  @ApiProperty({
    description: 'Fees generated for the phase'
  })
  feesGenerated: FeesGeneratedDto;

  @ApiProperty({
    description: 'Curation fees generated for the phase'
  })
  curationFeesGenerated: FeesGeneratedDto;

  @ApiProperty({
    description: 'Raffle fees generated for the phase'
  })
  raffleFeesGenerated: FeesGeneratedDto;

  @ApiProperty({
    description: 'Collection pot fees generated for the phase'
  })
  collectionPotFeesGenerated: FeesGeneratedDto;

  @ApiProperty({
    description: 'Treasury fees generated for the phase'
  })
  treasuryFeesGenerated: FeesGeneratedDto;

  @ApiProperty({
    description: 'Trading fee refund for the phase'
  })
  tradingFeeRefund: TradingFeeRefundDto | null;

  @ApiProperty({
    description: 'Raffle config for the phase'
  })
  raffleConfig: {
    phasePrize: { percentage: number };
    grandPrize: { percentage: number };
  } | null;
}
