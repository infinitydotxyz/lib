import { PickTypeX } from '../../../utils';
import { UserFollowingUser } from './user-following-user.dto';

export class UserFollowingUserDeletePayload extends PickTypeX(UserFollowingUser, ['userAddress'] as const) {}
