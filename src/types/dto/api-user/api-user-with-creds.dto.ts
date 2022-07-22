import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested, IsNotEmpty } from 'class-validator';
import { ApiUserCredsDto } from './api-user-creds.dto';
import { ApiUserDto, ApiUserPublicDto } from './api-user.dto';

export class ApiUserWithCredsDto extends ApiUserCredsDto {
  @ApiProperty({
    description: 'The user'
  })
  @ValidateNested()
  @Type(() => ApiUserDto)
  @IsNotEmpty()
  user: ApiUserDto;
}

export class ApiUserPublicWithCredsDto extends ApiUserCredsDto {
  @ApiProperty({
    description: 'The user'
  })
  @ValidateNested()
  @Type(() => ApiUserPublicDto)
  @IsNotEmpty()
  user: ApiUserPublicDto;
}
