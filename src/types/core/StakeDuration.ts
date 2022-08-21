/**
 * Possible lock-in periods for staking.
 * This represents the 'Duration' enum from the smart contract.
 */
export enum StakeDuration {
  /**
   * 0 months (NONE).
   */
  None,
  /**
   * 3 months (THREE_MONTHS).
   */
  ThreeMonths,
  /**
   * 6 months (SIX_MONTHS).
   */
  SixMonths,
  /**
   * 12 months (TWELVE_MONTHS).
   */
  TwelveMonths
}
