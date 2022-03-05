import { InfinityTweet, InfinityTwitterAccount } from './services/twitter/Tweet';
import { WyvernTraitWithValues } from './wyvern/WyvernOrder';
export declare enum OrderSide {
    Buy = 0,
    Sell = 1
}
export declare enum ListingType {
    FixedPrice = "fixedPrice",
    DutchAuction = "dutchAuction",
    EnglishAuction = "englishAuction"
}
export interface CollectionInfo {
    isClaimed?: boolean;
    chain: 'Ethereum' | string;
    searchCollectionName: string;
    description: string;
    bannerImage: string;
    profileImage: string;
    traits: WyvernTraitWithValues[];
    hasBlueCheck: boolean;
    address: string;
    name: string;
    cardImage: string;
    openseaUrl: string;
    chainId: '1' | string;
    benefits?: string[];
    partnerships?: Array<{
        name: string;
        link: string;
    }>;
    twitterSnippet?: TwitterSnippet;
    discordSnippet?: DiscordSnippet;
}
export declare type CollectionData = CollectionInfo & {
    links?: Links;
    stats?: CollectionStats;
};
export declare type EditableCollectionData = Pick<CollectionData, 'profileImage' | 'name' | 'description' | 'benefits' | 'partnerships' | 'links'>;
export interface UpdateCollectionDataRequest {
    profileImage: {
        /**
         * file is passed through req.files.profileImage
         */
        /**
         * whether the image was deleted
         */
        isDeleted: boolean;
    };
    name: string;
    description: string;
    twitter: string;
    discord: string;
    instagram: string;
    facebook: string;
    external: string;
    medium: string;
    wiki: string;
    telegram: string;
    benefits: string[];
    partnerships: Array<{
        name: string;
        link: string;
    }>;
}
export interface TwitterSnippet {
    /**
     * time the twitter snippet was last updated
     */
    timestamp: number;
    /**
     * the collection's twitter account
     */
    account?: InfinityTwitterAccount;
    /**
     * recent tweets by verified users mentioning the collection
     */
    recentTweets?: InfinityTweet[];
    /**
     * twitter users with the most followers that have mentioned the collection
     */
    topMentions?: InfinityTwitterAccount[];
}
export interface DiscordSnippet {
    /**
     * time the discord snippet was last updated
     */
    timestamp: number;
    /**
     * number of members in the discord
     */
    membersCount: number;
    /**
     * presence (number of active members)
     */
    presenceCount: number;
}
export interface CollectionStats {
    oneDay: {
        volume: number;
        change: number;
        sales: number;
        averagePrice: number;
        discordMembers?: number;
        discordPresence?: number;
        twitterFollowers?: number;
    };
    sevenDay: {
        volume: number;
        change: number;
        sales: number;
        averagePrice: number;
        discordMembers?: number;
        discordPresence?: number;
        twitterFollowers?: number;
    };
    thirtyDay: {
        volume: number;
        change: number;
        sales: number;
        averagePrice: number;
        discordMembers?: number;
        discordPresence?: number;
        twitterFollowers?: number;
    };
    total: {
        volume: number;
        sales: number;
        supply: number;
    };
    count: number;
    owners: number;
    averagePrice: number;
    reports: number;
    marketCap: number;
    floorPrice: number;
    timestamp: number;
    collectionAddress?: string;
    discordMembers?: number;
    discordPresence?: number;
    twitterFollowers?: number;
    votesFor?: number;
    votesAgainst?: number;
    name?: string;
    profileImage?: string;
    searchCollectionName?: string;
}
export interface Links {
    timestamp: number;
    twitter?: string;
    discord?: string;
    external?: string;
    medium?: string;
    slug?: string;
    telegram?: string;
    instagram?: string;
    wiki?: string;
    facebook?: string;
}
export interface Order {
    id: string;
    blueCheck: boolean;
    howToCall: number;
    salt: string;
    feeRecipient: string;
    staticExtradata: string;
    quantity: string;
    staticTarget: string;
    maker: string;
    side: number;
    takerProtocolFee: string;
    saleKind: number;
    basePrice: number;
    metadata: Metadata;
    extra: string;
    expirationTime: string;
    hasBonusReward: boolean;
    calldata: string;
    hash: string;
    r: string;
    replacementPattern: string;
    taker: string;
    takerRelayerFee: string;
    s: string;
    makerRelayerFee: string;
    listingTime: string;
    target: string;
    v: number;
    makerProtocolFee: string;
    paymentToken: string;
    feeMethod: number;
    exchange: string;
    makerReferrerFee: string;
}
export declare enum OrderType {
    BUY = 0,
    SELL = 1
}
export interface TraitItem {
    traitType: string;
    traitValue: string;
}
export interface Metadata {
    asset: Asset;
    hasBonusReward: boolean;
    schema: string;
    hasBlueCheck: boolean;
    createdAt: number;
    basePriceInEth: number;
    listingType: string;
    chainId: string;
}
export interface Asset {
    id: string;
    address: string;
    quantity: string;
    imagePreview: string;
    title: string;
    description: string;
    image: string;
    owner: string;
    collectionName: string;
    searchCollectionName?: string;
    searchTitle?: string;
    traits?: TraitItem[];
}
export interface Orders {
    count: number;
    listings: Order[];
}
export declare type BaseCardData = {
    id: string;
    title: string;
    name?: string;
    description?: string;
    image?: string;
    cardImage?: string;
    imagePreview?: string;
    price?: number;
    inStock?: number;
    order?: Order;
    tokenAddress?: string;
    tokenId?: string;
    collectionName?: string;
    maker?: string;
    hasBonusReward?: boolean;
    hasBlueCheck?: boolean;
    owner?: string;
    metadata?: Metadata;
    schemaName?: string;
    expirationTime?: string;
    chainId?: string;
};
export declare type CardData = BaseCardData & {
    openseaListing?: BaseCardData;
};
export declare enum WyvernSchemaName {
    ERC20 = "ERC20",
    ERC721 = "ERC721",
    ERC1155 = "ERC1155",
    LegacyEnjin = "Enjin",
    ENSShortNameAuction = "ENSShortNameAuction",
    CryptoPunks = "CryptoPunks"
}
/**
 * The NFT version that this contract uses.
 * ERC721 versions are:
 * 1.0: CryptoKitties and early 721s, which lack approve-all and
 *      have problems calling `transferFrom` from the owner's account.
 * 2.0: CryptoSaga and others that lack `transferFrom` and have
 *      `takeOwnership` instead
 * 3.0: The current OpenZeppelin standard:
 *      https://github.com/OpenZeppelin/openzeppelin-solidity/blob/master/contracts/token/ERC721/ERC721.sol
 * Special cases:
 * locked: When the transfer function has been locked by the dev
 */
export declare enum TokenStandardVersion {
    Unsupported = "unsupported",
    Locked = "locked",
    Enjin = "1155-1.0",
    ERC721v1 = "1.0",
    ERC721v2 = "2.0",
    ERC721v3 = "3.0"
}
