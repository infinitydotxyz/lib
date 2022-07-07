import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { ExternalNftDto } from './external-nft.dto';

export class ExternalNftArrayDto {
  @ApiProperty({ description: 'Array of nfts', type: [ExternalNftDto] })
  data!: ExternalNftDto[];

  @ApiProperty({ description: 'Cursor that can be used to get the next page' })
  cursor!: string;

  @ApiProperty({ description: 'Whether there are more results available' })
  hasNextPage!: boolean;

  @ApiProperty({ description: 'Total number of nfts owned by the user' })
  @IsOptional()
  totalOwned: number;
}
