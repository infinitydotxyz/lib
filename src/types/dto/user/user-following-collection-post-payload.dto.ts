import { PickType } from '@nestjs/mapped-types';
import { UserFollowingCollection } from './user-following-collection.dto';

export class UserFollowingCollectionPostPayload extends PickType(UserFollowingCollection, [
  'collectionAddress',
  'collectionChainId'
] as const) {}
