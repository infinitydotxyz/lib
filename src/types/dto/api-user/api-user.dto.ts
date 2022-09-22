import { ApiProperty } from '@nestjs/swagger';
import { PickTypeX } from '../../../utils';

import { Type } from 'class-transformer';
import { IsString, ValidateNested, IsNotEmpty, IsNumber } from 'class-validator';
import { PartialTypeX } from '../../../utils/swagger-types';
import { ApiUserConfigDto, ApiUserConfigPublicDto } from './api-user-config.dto';

export class ApiUserDto {
  @ApiProperty({
    description: 'The unique identifier of the user (api key)'
  })
  @IsString()
  id: string;

  @ApiProperty({
    description: 'The name of the user'
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'The configuration of the user'
  })
  @ValidateNested()
  @Type(() => ApiUserConfigDto)
  @IsNotEmpty()
  config: ApiUserConfigDto;

  @ApiProperty({
    description: 'The HMAC of the user'
  })
  @IsString()
  hmac: string;

  @ApiProperty({
    description: 'The timestamp of when the user was created'
  })
  @IsNumber()
  createdAt: number;

  @ApiProperty({
    description: 'The timestamp of when the user was last updated'
  })
  @IsNumber()
  updatedAt: number;
}

export class AdminUpdateApiUserDto extends PickTypeX(ApiUserDto, ['name', 'config']) {}
export class PartialAdminUpdateApiUserDto extends PartialTypeX(AdminUpdateApiUserDto) {}

export class ApiUserPublicDto extends PickTypeX(ApiUserDto, ['id', 'name']) {
  @ApiProperty({
    description: 'The configuration of the user'
  })
  @ValidateNested()
  @Type(() => ApiUserConfigPublicDto)
  @IsNotEmpty()
  config: ApiUserConfigPublicDto;
}
