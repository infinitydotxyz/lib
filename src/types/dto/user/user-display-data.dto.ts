import { ApiProperty } from '@nestjs/swagger';
import { UserDisplayData } from '../../core';

export class UserDisplayDataDto implements UserDisplayData {
  @ApiProperty({
    description: "The user's address"
  })
  address: string;

  @ApiProperty({
    description: "The user's display name"
  })
  displayName: string;

  @ApiProperty({
    description: "The user's username"
  })
  username: string;

  @ApiProperty({
    description: "The user's avatar"
  })
  profileImage: string;

  @ApiProperty({
    description: "The user's banner image"
  })
  bannerImage: string;
}
