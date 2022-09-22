import { UserProfileDto } from './user-profile.dto';
import { PartialType, PickType } from '@nestjs/mapped-types';

export class UpdateUserProfileDto extends PickType(UserProfileDto, [
  'displayName',
  'username',
  'bio',
  'discordUsername',
  'twitterUsername',
  'instagramUsername',
  'facebookUsername'
] as const) {}

export class PartialUpdateUserProfileDto extends PartialType(UpdateUserProfileDto) {}
