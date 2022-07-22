import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class RateLimitDto {
  @ApiProperty({
    description: 'The number of requests allowed per ttl seconds'
  })
  @IsNumber()
  limit: number;

  @ApiProperty({
    description: 'The number of seconds before the limit resets'
  })
  @IsNumber()
  ttl: number;
}
