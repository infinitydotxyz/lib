import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class ApiUserCredsDto {
  @ApiProperty({
    description: "The user's api key"
  })
  @IsString()
  apiKey: string;

  @ApiProperty({
    description: "The user's api secret"
  })
  @IsString()
  apiSecret: string;
}
