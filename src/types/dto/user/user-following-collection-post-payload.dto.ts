import { PickTypeX } from '../../../utils';
import { UserFollowingCollection } from './user-following-collection.dto';

export class UserFollowingCollectionPostPayload extends PickTypeX(UserFollowingCollection, [
  'collectionAddress',
  'collectionChainId'
] as const) {}
