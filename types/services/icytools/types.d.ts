export interface schema {
    query: RootQuery;
}
interface TokenAttribute {
    name: string;
    value: string;
}
interface Wallet {
    address: string;
    ensName: string;
    logs: LogConnection;
    token: Token;
    tokens: TokenConnection;
}
interface LogConnection {
    pageInfo: PageInfo;
    edges: LogEdge[];
}
interface PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor: string;
    endCursor: string;
}
interface LogEdge {
    node: Log;
    cursor: string;
}
declare enum LogType {
    MINT = "MINT",
    ORDER = "ORDER",
    TRANSFER = "TRANSFER"
}
interface TokenConnection {
    pageInfo: PageInfo;
    edges: TokenEdge[];
}
interface TokenEdge {
    node: Token;
    cursor: string;
}
export interface ERC721Contract {
    address: string;
    isVerified: boolean;
    tokenStandard: TokenStandard.ERC721;
    attributes: ContractAttribute[];
    logs: LogConnection;
    token: TokenConnection;
    name: string;
    stats: ContractStats;
    symbol: string;
}
export declare enum TokenStandard {
    ERC721 = "ERC721",
    ERC1155 = "ERC1155"
}
interface ContractStats {
    average: number;
    ceiling: number;
    floor: number;
    totalSales: number;
    volume: number;
}
export interface ERC1155Contract extends BaseContract {
    tokenStandard: TokenStandard.ERC1155;
}
export interface BaseContract {
    address: string;
    isVerified: boolean;
    tokenStandard: TokenStandard;
    attributes: ContractAttribute[];
    logs: LogConnection;
    token: Token;
    tokens: TokenConnection;
}
export declare type Contract = ERC721Contract | ERC1155Contract;
interface ContractAttribute {
    name: string;
    rarity: number;
    value: string;
    valueCount: number;
}
export interface BaseLog {
    blockNumber: number;
    contractAddress: string;
    estimatedConfirmedAt: Date;
    fromAddress: string;
    logIndex: number;
    toAddress: string;
    transactionHash: string;
    transactionCreator: string;
    type: LogType;
    contract: Contract;
    from: Wallet;
    to: Wallet;
    token: Token;
}
interface Log {
    blockNumber: number;
    contractAddress: string;
    estimatedConfirmedAt: Date;
    fromAddress: string;
    logIndex: number;
    toAddress: string;
    transactionHash: string;
    transactionCreator: string;
    type: LogType;
    contract: Contract;
    from: Wallet;
    to: Wallet;
    token: Token;
}
export interface MintLog {
    blockNumber: number;
    contractAddress: string;
    estimatedConfirmedAt: Date;
    fromAddress: string;
    logIndex: number;
    toAddress: string;
    transactionHash: string;
    transactionCreator: string;
    type: LogType;
    contract: Contract;
    from: Wallet;
    to: Wallet;
    token: Token;
}
export interface OrderLog {
    blockNumber: number;
    contractAddress: string;
    estimatedConfirmedAt: Date;
    fromAddress: string;
    logIndex: number;
    toAddress: string;
    transactionHash: string;
    transactionCreator: string;
    type: LogType;
    contract: Contract;
    from: Wallet;
    to: Wallet;
    token: Token;
    marketplace: LogOrderMarketplace;
    priceInEth: number;
}
declare enum LogOrderMarketplace {
    CRYPTOPUNKS = "CRYPTOPUNKS",
    GEM = "GEM",
    GENIE = "GENIE",
    LOOKSRARE = "LOOKSRARE",
    OPENSEA = "OPENSEA"
}
export interface TransferLog {
    blockNumber: number;
    contractAddress: string;
    estimatedConfirmedAt: Date;
    fromAddress: string;
    logIndex: number;
    toAddress: string;
    transactionHash: string;
    transactionCreator: string;
    type: LogType;
    contract: Contract;
    from: Wallet;
    to: Wallet;
    token: Token;
}
export interface ERC721Token {
    tokenId: string;
    attributes: TokenAttribute[];
    contract: Contract;
    images: TokenImage[];
    logs: LogConnection;
    name: string;
    ownerAddress: string;
    symbol: string;
    metadata: ERC721Metadata;
    owner: Wallet;
}
interface TokenImage {
    height: number;
    mimeType: string;
    url: string;
    width: number;
}
interface ERC721Metadata {
    animation_url: string;
    attributes: ERC721MetadataAttribute[];
    background_color: string;
    description: string;
    external_url: string;
    image: string;
    image_data: string;
    name: string;
    youtube_url: string;
}
interface ERC721MetadataAttribute {
    display_type: string;
    trait_type: string;
    value: string;
}
export interface BaseToken {
    tokenId: string;
    attributes: TokenAttribute[];
    contract: Contract;
    images: TokenImage[];
    logs: LogConnection;
}
interface Token {
    tokenId: string;
    attributes: TokenAttribute[];
    contract: Contract;
    images: TokenImage[];
    logs: LogConnection;
}
interface RootQuery {
    contract: Contract;
    contracts: ContractConnection;
    logs: LogConnection;
    token: Token;
    wallet: Wallet;
}
export interface ContractConnection {
    pageInfo: PageInfo;
    edges: ContractEdge[];
}
interface ContractEdge {
    node: Contract;
    cursor: string;
}
export declare enum ContractsOrderBy {
    /**
     * Sort contracts by average sale price within a given time range. Defaults to within last hour, use timeframe on "stats" to further filter.
     */
    Average = "AVERAGE",
    /**
     * Sort contracts by max sale price within a given time range. Defaults to within last hour, use timeframe on "stats" to further filter.
     */
    Ceiling = "CEILING",
    /**
     * Sort contracts by min sale price within a given time range. Defaults to within last hour, use timeframe on "stats" to further filter.
     */
    Floor = "FLOOR",
    /**
     * Sort contracts alphabetically by name
     */
    Name = "NAME",
    /**
     * Sort contracts by number of sales. Defaults to within last hour, use timeframe on "stats" to further filter.
     */
    Sales = "SALES",
    /**
     * Sort contracts alphabetically by symbol
     */
    Symbol = "SYMBOL",
    /**
     * Sort contracts by volume. Defaults to within last hour, use timeframe on "stats" to further filter.
     */
    Volume = "VOLUME"
}
export {};
