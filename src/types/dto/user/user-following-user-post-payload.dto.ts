import { PickType } from '@nestjs/mapped-types';
import { UserFollowingUser } from './user-following-user.dto';

export class UserFollowingUserPostPayload extends PickType(UserFollowingUser, ['userAddress'] as const) {}
