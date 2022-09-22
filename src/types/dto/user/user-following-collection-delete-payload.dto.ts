import { PickTypeX } from '../../../utils';
import { UserFollowingCollection } from './user-following-collection.dto';

export class UserFollowingCollectionDeletePayload extends PickTypeX(UserFollowingCollection, [
  'collectionAddress',
  'collectionChainId'
] as const) {}
