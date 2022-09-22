import { PartialTypeX, PickTypeX } from '../../../utils/swagger-types';
import { UserProfileDto } from './user-profile.dto';

export class UpdateUserProfileDto extends PickTypeX(UserProfileDto, [
  'displayName',
  'username',
  'bio',
  'discordUsername',
  'twitterUsername',
  'instagramUsername',
  'facebookUsername'
] as const) {}

export class PartialUpdateUserProfileDto extends PartialTypeX(UpdateUserProfileDto) {}
