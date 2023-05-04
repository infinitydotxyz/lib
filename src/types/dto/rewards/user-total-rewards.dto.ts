export class UserCumulativeRewardsDto {
  contractAddress: string;
  claimedWei: string;
  claimedEth: number;
  claimableWei: string;
  claimableEth: number;
  account: string;
  cumulativeAmount: string;
  merkleRoot: string;
  merkleProof: string[];
}

export class UserTotalRewardsDto {
  totalRewards: {
    claim: UserCumulativeRewardsDto;
  };

  airdrop: {
    isINFT: boolean;
    cumulative: number;
  };

  buyRewards: {
    volLast24Hrs: number;
    volTotal: number;
    numBuysLast24Hrs: number;
    numBuysTotal: number;
    earnedRewardsTotal: number;
  };

  listingRewards: {
    numListings24Hrs: number;
    numListingsTotal: number;
    earnedRewardsTotal: number;
  };

  referrals: {
    numReferrals: number;
    numTokens: number;
    referralRewardBoost: number;
    referralLink: string;
  };
}
