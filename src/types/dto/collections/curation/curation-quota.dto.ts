import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CurationQuotaDto {
  @ApiProperty()
  @IsNumber()
  availableVotes: number;

  @ApiProperty()
  @IsNumber()
  totalStaked: number;
}
