import { PickType } from '@nestjs/mapped-types';
import { UserFollowingCollection } from './user-following-collection.dto';

export class UserFollowingCollectionDeletePayload extends PickType(UserFollowingCollection, [
  'collectionAddress',
  'collectionChainId'
] as const) {}
