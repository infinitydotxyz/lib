export declare const RewardTiers: {
    t1: {
        min: number;
        max: number;
        eligible: number;
        threshold: number;
    };
    t2: {
        min: number;
        max: number;
        eligible: number;
        threshold: number;
    };
    t3: {
        min: number;
        max: number;
        eligible: number;
        threshold: number;
    };
    t4: {
        min: number;
        max: number;
        eligible: number;
        threshold: number;
    };
    t5: {
        min: number;
        max: number;
        eligible: number;
        threshold: number;
    };
};
export declare const UsPersonAnswer: {
    yes: string;
    no: string;
    none: string;
    answeredAt: number;
};
export declare type LeaderBoard = {
    count: number;
    results: LeaderBoardEntries;
};
export declare type LeaderBoardEntries = {
    saleLeaders: LeaderBoardEntry[];
    buyLeaders: LeaderBoardEntry[];
};
export declare type LeaderBoardEntry = {
    id: string;
    total: number;
    chainId: string;
};
export declare type UserReward = {
    numBonusListings: string;
    numBonusOffers: string;
    numListings: string;
    numOffers: string;
    numPurchases: string;
    numSales: string;
    purchasesFeesTotal: string;
    purchasesTotal: string;
    rewardTier: {
        min: number;
        max: number;
        eligible: number;
        threshold: number;
    };
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
export declare type RewardResults = {
    newEligible: number;
    newThreshold: number;
    transacted: number;
    finalEarnedTokens: number;
    refunded?: boolean;
};
export declare type CollectionCardEntry = {
    address: string;
    bannerImage: string;
    cardImage: string;
    description: string;
    id: string;
    name: string;
    openseaUrl: string;
    hasBlueCheck: boolean;
    title: string;
    chainId: string;
};
export declare type TransactionCardEntry = {
    txnHash: string;
    createdAt: number;
    actionType: string;
    status: string;
    feesInEth: number;
    salePriceInEth: number;
    chainId: string;
};
