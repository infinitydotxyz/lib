export interface UserEvent {
  /**
   * array containing the address(s)
   * of the users that are involved in this event
   * ---------------------------------------
   * used to support queries for events by user address
   * with multiple users and/or across multiple events
   * with non-standardized user address fields
   * (i.e. buyerAddress, sellerAddress, makerAddress)
   */
  usersInvolved: string[];
}
