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
    last24Hrs: number;
    cumulative: number;
  };

  listingRewards: {
    last24Hrs: number;
    cumulative: number;
  };

  referrals: {
    numReferrals: number;
    numTokens: number;
    referralRewardBoost: number;
    referralLink: string;
  };
}
