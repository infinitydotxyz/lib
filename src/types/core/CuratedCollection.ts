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
   * Amount of user votes.
   */
  votes: number;

  /**
   * Fees accrued in USD.
   */
  fees: number;

  /**
   * Fees APR as a percentage.
   */
  feesAPR: number;
}
