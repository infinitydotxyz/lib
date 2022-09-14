import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';
import { ChainId } from '../../core';

export class RaffleQueryDto {
  @ApiPropertyOptional({
    description: 'The chain ID of the raffle',
    enum: ChainId
  })
  @IsOptional()
  @IsEnum(ChainId)
  chainId?: ChainId;
}
