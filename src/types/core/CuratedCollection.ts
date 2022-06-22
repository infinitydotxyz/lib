export interface CuratedCollection {
  /**
   * Collection address.
   */
  collectionAddress: string;

  /**
   * Collection chain id .
   */
  collectionChainId: string;

  /**
   * Address of the user who curated this collection.
   */
  userAddress: string;

  /**
   * User chain id.
   */
  userChainId: string;

  /**
   * Amount of votes.
   */
  votes: number;
}
