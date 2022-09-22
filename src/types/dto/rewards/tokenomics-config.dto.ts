import { ApiProperty } from '@nestjs/swagger';
import { TokenomicsPhaseDto } from '..';
import { ChainId } from '../../core';

export class TokenomicsConfigDto {
  @ApiProperty({
    description: 'Chain id of the tokenomics config'
  })
  chainId: ChainId;

  @ApiProperty({
    description: 'Phases of the tokenomics config'
  })
  phases: TokenomicsPhaseDto[];
}
