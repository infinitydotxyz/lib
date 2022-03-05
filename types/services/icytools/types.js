"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractsOrderBy = exports.TokenStandard = void 0;
// input: LogsFilterInputType;
//   // Filter input for logs
//   input LogsFilterInputType {
//     // Filter logs by their block number
//     blockNumber: IntegerInput
//     // Filter logs by contract address
//     contractAddress: StringInput
//     // Filter logs by their estimated confirmation date
//     estimatedConfirmedAt: DateInputType
//     // Filter logs by the "from" wallet
//     fromAddress: StringInput
//     // Filter logs by the "to" wallet
//     toAddress: StringInput
//     // Filter logs by their block number
//     typeIn: [LogType]
//   }
//   input IntegerInput {
//     eq: number
//     lt: number
//     lte: number
//     gt: number
//     gte: number
//     in: [number!]
//   }
//   input StringInput {
//     eq: string
//     in: [string!]
//     notIn: [string!]
//   }
//   input DateInputType {
//     eq: Date
//     lt: Date
//     lte: Date
//     gt: Date
//     gte: Date
//   }
// Date custom scalar type
//   scalar Date
var LogType;
(function (LogType) {
    LogType["MINT"] = "MINT";
    LogType["ORDER"] = "ORDER";
    LogType["TRANSFER"] = "TRANSFER";
})(LogType || (LogType = {}));
var TokenStandard;
(function (TokenStandard) {
    TokenStandard["ERC721"] = "ERC721";
    TokenStandard["ERC1155"] = "ERC1155";
})(TokenStandard = exports.TokenStandard || (exports.TokenStandard = {}));
var LogOrderMarketplace;
(function (LogOrderMarketplace) {
    LogOrderMarketplace["CRYPTOPUNKS"] = "CRYPTOPUNKS";
    LogOrderMarketplace["GEM"] = "GEM";
    LogOrderMarketplace["GENIE"] = "GENIE";
    LogOrderMarketplace["LOOKSRARE"] = "LOOKSRARE";
    LogOrderMarketplace["OPENSEA"] = "OPENSEA";
})(LogOrderMarketplace || (LogOrderMarketplace = {}));
//   // Filters available to the "contracts" query
//   input ContractsFilterInput {
//     // The address of the contract
//     address: StringInput
//     // The name of the contract
//     name: SearchStringInput
//     // The symbol of the contract
//     symbol: SearchStringInput
//   }
//   input SearchStringInput {
//     eq: string
//     startswith: string
//     endswith: string
//     contains: string
//     istartswith: string
//     iendswith: string
//     icontains: string
//   }
var ContractsOrderBy;
(function (ContractsOrderBy) {
    /**
     * Sort contracts by average sale price within a given time range. Defaults to within last hour, use timeframe on "stats" to further filter.
     */
    ContractsOrderBy["Average"] = "AVERAGE";
    /**
     * Sort contracts by max sale price within a given time range. Defaults to within last hour, use timeframe on "stats" to further filter.
     */
    ContractsOrderBy["Ceiling"] = "CEILING";
    /**
     * Sort contracts by min sale price within a given time range. Defaults to within last hour, use timeframe on "stats" to further filter.
     */
    ContractsOrderBy["Floor"] = "FLOOR";
    /**
     * Sort contracts alphabetically by name
     */
    ContractsOrderBy["Name"] = "NAME";
    /**
     * Sort contracts by number of sales. Defaults to within last hour, use timeframe on "stats" to further filter.
     */
    ContractsOrderBy["Sales"] = "SALES";
    /**
     * Sort contracts alphabetically by symbol
     */
    ContractsOrderBy["Symbol"] = "SYMBOL";
    /**
     * Sort contracts by volume. Defaults to within last hour, use timeframe on "stats" to further filter.
     */
    ContractsOrderBy["Volume"] = "VOLUME";
})(ContractsOrderBy = exports.ContractsOrderBy || (exports.ContractsOrderBy = {}));
