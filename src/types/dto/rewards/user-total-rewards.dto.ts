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
  tradingRefund: {
    volume: number;
    rewards: number;
    sells: number;
    buys: number;
    claim: UserCumulativeRewardsDto;
  };

  flurAirdrop: {
    claim: UserCumulativeRewardsDto;
  };

  flowRewards: {
    claim: UserCumulativeRewardsDto;
  };

  curation: {
    totalRewardsWei: string;
    totalRewardsEth: number;
    claim: UserCumulativeRewardsDto;
  };

  referrals: {
    totalRewardsWei: string;
    totalRewardsEth: number;
    numReferrals: number;
  };
}
