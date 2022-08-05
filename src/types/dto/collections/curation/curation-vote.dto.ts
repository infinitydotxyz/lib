import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Min } from 'class-validator';

export class CurationVoteDto {
  @IsNumber({ allowInfinity: false, allowNaN: false })
  @Min(1)
  @ApiProperty({ description: 'The number of votes to put into this collection', example: 10 })
  votes: number;
}

export class CurationVoteBulkDto extends CurationVoteDto {
  @IsString()
  @ApiProperty({ description: 'The collection to vote on' })
  collection: string;
}
