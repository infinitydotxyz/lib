import { PickType } from '@nestjs/mapped-types';
import { UserFollowingUser } from './user-following-user.dto';

export class UserFollowingUserDeletePayload extends PickType(UserFollowingUser, ['userAddress'] as const) {}
