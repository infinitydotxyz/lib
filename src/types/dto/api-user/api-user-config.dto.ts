import { ApiProperty, PickType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested, IsNotEmpty, IsEnum } from 'class-validator';
import { ApiRole } from '../../core/api-user/api-role';
import { RateLimitDto } from './rate-limit.dto';

export class ApiUserConfigDto {
  @ApiProperty({
    description: 'A global rate limit for the user'
  })
  @ValidateNested()
  @Type(() => RateLimitDto)
  @IsNotEmpty()
  global: RateLimitDto;

  @ApiProperty({
    description: 'The role of the user',
    enum: ApiRole
  })
  @IsEnum(ApiRole)
  @IsNotEmpty()
  role: ApiRole;
}

export class ApiUserConfigPublicDto extends PickType(ApiUserConfigDto, ['global']) {}
