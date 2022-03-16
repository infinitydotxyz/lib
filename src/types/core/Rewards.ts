export const RewardTiers = {
  t1: {
    min: 0,
    max: 1000,
    eligible: 70,
    threshold: 0.02
  },
  t2: {
    min: 1000,
    max: 20000,
    eligible: 1088,
    threshold: 2
  },
  t3: {
    min: 20000,
    max: 100000,
    eligible: 2636,
    threshold: 5
  },
  t4: {
    min: 100000,
    max: 500000,
    eligible: 7337,
    threshold: 15
  },
  t5: {
    min: 500000,
    max: Infinity,
    eligible: 16678,
    threshold: 30
  }
};

export const UsPersonAnswer = {
  yes: 'YES',
  no: 'NO',
  none: 'NONE',
  answeredAt: 0
};

export type LeaderBoard = {
  count: number;
  results: LeaderBoardEntries;
};

export type LeaderBoardEntries = {
  saleLeaders: LeaderBoardEntry[];
  buyLeaders: LeaderBoardEntry[];
};

export type LeaderBoardEntry = {
  id: string;
  total: number;
  chainId: string;
};

// ===========================================================

export type UserReward = {
  numBonusListings: string;
  numBonusOffers: string;
  numListings: string;
  numOffers: string;
  numPurchases: string;
  numSales: string;
  purchasesFeesTotal: string;
  purchasesTotal: string;
  rewardTier: { min: number; max: number; eligible: number; threshold: number };
  salesFeesTotal: string;
  salesTotal: string;

  purchasesFeesTotalNumeric: number;
  purchasesTotalNumeric: number;
  hasAirdrop: boolean;
  openseaVol: number;
  salesFeesTotalNumeric: number;
  salesTotalNumeric: number;
  doneSoFar: number;
  usPerson: 'YES' | 'NO' | 'NONE';
};

// ===========================================================

export type RewardResults = {
  newEligible: number;
  newThreshold: number;
  transacted: number;
  finalEarnedTokens: number;
  refunded?: boolean;
};

// ===========================================================

export type CollectionCardEntry = {
  address: string;
  bannerImage: string;
  cardImage: string;
  description: string;
  id: string;
  name: string;
  openseaUrl: string;
  hasBlueCheck: boolean;
  title: string; // for <PreviewModal>
  chainId: string;
};

// ===========================================================

export type TransactionCardEntry = {
  txnHash: string;
  createdAt: number;
  actionType: string;
  status: string;
  feesInEth: number;
  salePriceInEth: number;
  chainId: string;
};
