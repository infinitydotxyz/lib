import { ChainId } from '../types/core';
import { Erc20TokenMetadata } from '../types/core/Erc20TokenMetadata';

const getEnvironmentVariable = (name: string, required = true) => {
  const variable = process.env[name];
  if (required && !variable) {
    throw new Error(`Missing environment variable ${name}`);
  }
  return variable;
};

export enum Env {
  Dev = 'dev',
  Prod = 'prod'
}

export enum Version {
  V1 = 'v1',
  V2 = 'v2'
}
export const CURRENT_VERSION = Version.V2;

export const ONE_MIN = 60 * 1000;
export const ONE_HOUR = 60 * ONE_MIN;
export const ONE_DAY = 24 * ONE_HOUR;
export const ONE_WEEK = 7 * ONE_DAY;
export const ONE_YEAR = 365.25 * ONE_DAY;

export const PROTOCOL_FEE_BPS = 250;
export const TRENDING_COLLS_TTS = 12 * 60 * 60 * 1000; // time to stale 12 hours
export const LOGIN_NONCE_EXPIRY_TIME = 24 * 60 * 60 * 1000; // 24 hours

// todo: remove unused constants
export const firestoreConstants = {
  COLLECTIONS_COLL: 'collections',
  DATA_SUB_COLL: 'data',
  /**
   * users
   */
  USERS_COLL: 'users',
  USER_CURATION_COLL: 'userCuration',
  LISTINGS_COLL: 'listings',
  OFFERS_COLL: 'offers',
  ASSETS_COLL: 'assets',
  PURCHASES_COLL: 'purchases',
  SALES_COLL: 'sales',
  TXNS_COLL: 'txns',
  MISSED_TXNS_COLL: 'missedTxns',
  FEATURED_COLL: 'featuredCollections',
  TWITTER_COLL: 'twitter',
  TWEETS_COLL: 'tweets',
  MENTIONS_COLL: 'mentions',
  HISTORICAL_COLL: 'historical',
  COLLECTION_STATS_COLL: 'collectionStats',
  COLLECTION_VOTES_COLL: 'collectionVotes',
  COLLECTION_VOTES_SHARDS_COLL: 'collectionVotesShards',
  NFT_STATS_COLL: 'nftStats',
  COLLECTION_MENTIONS_COLL: 'mentions',
  COLLECTION_SOCIALS_STATS_COLL: 'socialsStats',
  COLLECTION_NFTS_COLL: 'nfts',
  COLLECTION_INVALID_NFTS_COLL: 'invalidNfts',
  COLLECTION_ATTRIBUTES: 'attributes',
  COLLECTION_ATTRIBUTES_VALUES: 'values',
  COLLECTION_LINKS_DOC: 'links',
  COLLECTION_OPENSEA_STATS_DOC: 'opensea',
  COLLECTION_TWITTER_DOC: 'twitter',
  COLLECTION_DISCORD_DOC: 'discord',
  COLLECTION_SALES_COLL: 'collectionSales',
  NFT_SALES_COLL: 'nftSales',
  AUTH_COLL: 'auth',
  EDITORS_DOC: 'editors',
  CREATOR_DOC: 'creator',
  ADMINS_DOC: 'admins',
  FEED_COLL: 'feed',
  COLLECTION_FOLLOWS_COLL: 'collectionFollows',
  USER_FOLLOWS_COLL: 'userFollows',
  USER_COLLECTIONS_COLL: 'userCollections',
  USER_NFTS_COLL: 'userNfts',
  SELL_ORDERS_COLL: 'sellOrders',
  BUY_ORDERS_COLL: 'buyOrders',
  ORDERS_COLL: 'orders',
  ORDER_ITEMS_SUB_COLL: 'orderItems',
  ORDER_MATCHES_COLL: 'orderMatches',
  TRENDING_COLLECTIONS_COLL: 'trendingCollections',
  TRENDING_BY_VOLUME_DOC: 'bySalesVolume',
  TRENDING_BY_AVG_PRICE_DOC: 'byAvgPrice',
  COUNTER_DOC: 'counter',
  NUM_BUY_ORDER_ITEMS_FIELD: 'numBuyOrderItems',
  NUM_SELL_ORDER_ITEMS_FIELD: 'numSellOrderItems',
  OPEN_BUY_INTEREST_FIELD: 'openBuyInterest',
  OPEN_SELL_INTEREST_FIELD: 'openSellInterest',
  API_USERS_COLL: 'apiUsers',
  /**
   * staking
   */
  STAKING_CONTRACTS_COLL: 'stakingContracts',
  STAKING_LEDGER_COLL: 'stakingLedger',
  /**
   * curation
   */
  COLLECTION_CURATORS_COLL: 'curators',
  COLLECTION_CURATION_COLL: 'curationCollection',
  CURATION_METADATA_DOC: 'curationMetadata',
  CURATION_LEDGER_COLL: 'curationLedger',
  CURATION_BLOCK_REWARDS_COLL: 'curationBlockRewards',
  CURATION_BLOCK_USER_REWARDS_COLL: 'curationBlockUserRewards',
  CURATION_PERIOD_REWARDS_COLL: 'curationPeriodRewards',
  CURATION_PERIOD_USER_REWARDS_COLL: 'curationPeriodUserRewards',
  CURATION_SNIPPETS_COLL: 'curationSnippets',
  CURATION_SNIPPET_DOC: 'curationSnippet',
  CURATION_SNIPPET_USERS_COLL: 'curationSnippetUsers',
  STAKER_CONTRACT_CURATION_PERIODS_COLL: 'stakerContractCurationPeriods',
  STAKER_CONTRACT_CURATION_PERIOD_USERS_COLL: 'stakerContractCurationPeriodsUsers',

  /**
   * rewards
   */
  REWARDS_COLL: 'rewards',
  USER_REWARDS_COLL: 'userRewards',
  USER_TXN_FEE_REWARDS_LEDGER_COLL: 'userTransactionFeeRewardsLedger',
  USER_ALL_TIME_REWARDS_COLL: 'userAllTimeRewards',
  USER_ALL_TIME_TXN_FEE_REWARDS_DOC: 'userAllTimeTransactionFeeRewards',
  USER_REWARD_PHASES_COLL: 'userRewardPhases',

  /**
   * raffles
   */
  RAFFLE_TICKETS_COLL: 'raffleTickets',
  RAFFLE_TICKETS_PHASES_COLL: 'raffleTicketPhases',
  RAFFLE_TICKETS_PHASE_USERS_COLL: 'raffleTicketPhaseUsers',

  RAFFLES_COLL: 'raffles',
  STAKING_CONTRACT_RAFFLES_COLL: 'stakingContractRaffles',
  RAFFLE_ENTRANTS_COLL: 'raffleEntrants',
  RAFFLE_ENTRANTS_LEDGER_COLL: 'raffleEntrantLedger',
  RAFFLE_TOTALS_COLL: 'raffleTotals',
  RAFFLE_TOTALS_REWARDS_DOC: 'raffleRewards',
  RAFFLE_REWARDS_LEDGER_COLL: 'raffleRewardsLedger',
  RAFFLE_TRIGGERS_COLL: 'raffleTriggers',
  RAFFLE_LEDGER_TRIGGER_DOC: 'rewardsLedgerTrigger',
  RAFFLE_TICKET_TOTALS_DOC: 'raffleTicketTotals',
  USER_RAFFLE_ORDERS_LEDGER_COLL: 'userRaffleOrdersLedger',

  /**
   * treasury
   */
  TREASURY_COLL: 'treasury',
  TREASURY_LEDGER_COLL: 'treasuryLedger',

  /**
   * token prices
   */
  TOKEN_POOLS_COLL: 'tokenPools',
  POOL_PRICES_COLL: 'poolPrices',

  /**
   * sales
   */
  MARKETPLACE_STATS_COLL: 'marketplaceStats',
  SOURCE_STATS_COLL: 'sourceStats',

  /**
   * stat aggregation
   */
  AGGREGATED_COLLECTION_SALES_COLL: 'aggregatedCollectionSales',
  AGGREGATED_NFT_SALES_COLL: 'aggregatedNftSales',
  AGGREGATED_SOURCE_SALES_COLL: 'aggregatedSourceSales',
  INTERVAL_SALES_COLL: 'intervalSales',

  /**
   * contract listeners
   */
  PROTOCOL_FEE_EVENTS_COLL: 'protocolFeeEvents',
  CONTRACT_EVENTS: '_contractEvents',

  /**
   * collection favorites (collection pot)
   */
  COLLECTION_PHASE_FAVORITES: 'collectionPhaseFavorites',
  USER_PHASE_FAVORITES: 'userPhaseFavorites'
};

export const DEFAULT_ITEMS_PER_PAGE = 50;

export const WYVERN_EXCHANGE_ADDRESS = '0x7f268357a8c2552623316e2562d90e642bb538e5';

export const WYVERN_ATOMIC_MATCH_FUNCTION = 'atomicMatch_';
export const WYVERN_CANCEL_ORDER_FUNCTION = 'cancelOrder_';
export const NULL_HASH = '0x0000000000000000000000000000000000000000000000000000000000000000';
export const NULL_ADDRESS = '0x0000000000000000000000000000000000000000';

export const ERC721InterfaceId = '0x80ac58cd';
export const ERC1155InterfaceId = '0xd9b67a26';

export const TRACE_LOG = getEnvironmentVariable('TRACE_LOG', false) === 'true';
export const INFO_LOG = getEnvironmentVariable('INFO_LOG', false) === 'true';
export const ERROR_LOG = getEnvironmentVariable('ERROR_LOG', false) === 'true';
export const WARN_LOG = getEnvironmentVariable('WARN_LOG', false) === 'true';

// ethereum
export const ETHEREUM_NETWORK_NAME = 'main';
export const ETHEREUM_CHAIN_SCANNER_BASE = 'https://etherscan.io';
export const ETHEREUM_WETH_ADDRESS = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'.toLowerCase();
export const ETHEREUM_STAKER_CONTRACT_ADDRESS_TEST = '0xbFf1B5b3B9775b6A775FdC1e688d0f365B49648A'.toLowerCase();
export const ETHEREUM_TOKEN_CONTRACT_ADDRESS_TEST = '0xcb14EBeF218aa871e791EB2AA6eF131540C3a6c4'.toLowerCase();

export const ETHEREUM_TOKEN_CONTRACT_ADDRESS = '0xbAdA557cdFA4f5a45bf7fed3cBb40Db567f9E9Ad'.toLowerCase();
export const ETHEREUM_STAKER_CONTRACT_ADDRESS = '0xBAda55fA5FF3850fC979455F27F0cA3f1178Be55'.toLowerCase();

export const ETHEREUM_INFINITY_EXCHANGE_ADDRESS = '0xbADa5551B2f08d3959329B2fF8D0A7CC8BE26324'.toLowerCase();
export const ETHEREUM_INFINITY_OB_COMPLICATION_ADDRESS = '0xbaDa5555fe632ace2C90Fee8C060703369c25f1c'.toLowerCase();

// goerli
export const GOERLI_NETWORK_NAME = 'goerli';
export const GOERLI_CHAIN_SCANNER_BASE = 'https://goerli.etherscan.io';
export const GOERLI_WETH_ADDRESS = '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6'.toLowerCase();
export const GOERLI_STAKER_CONTRACT_ADDRESS = '0x0Ec7783CeDDC6e65810A6dB9e87e0654576cb297'.toLowerCase();
export const GOERLI_TOKEN_CONTRACT_ADDRESS = '0x1aD0880C80c4589c992dc7Ce87ABD3eb60F54842'.toLowerCase();

export const GOERLI_INFINITY_EXCHANGE_ADDRESS = '0xf0B83Ed51Fa7C9617dD48Fe5864566BBD9519E4b'.toLowerCase();
export const GOERLI_INFINITY_OB_COMPLICATION_ADDRESS = '0x6deb5e1A056975e0F2024F3d89b6D2465Bde22aF'.toLowerCase();

// polygon
export const POLYGON_NETWORK_NAME = 'polygon';
export const POLYGON_CHAIN_SCANNER_BASE = 'https://polygonscan.com';
export const POLYGON_WETH_ADDRESS = '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619'.toLowerCase();

// todo these are not the most recent contracts
export const POLYGON_INFINITY_EXCHANGE_ADDRESS = '0x5c600fff0AC90cdF026a16E4E315a2471F7BF7A6'.toLowerCase();
export const POLYGON_INFINITY_OB_COMPLICATION_ADDRESS = '0x748C74994fFF570D7E3fd14f25c17C3D9702832c'.toLowerCase();

/**
 * arbitrary but consistent timestamp to allow us to get all stats using the same
 * firestore indices as stats where the timestamp changes based on the doc id
 */
export type AllTimeStatsTimestampType = 1640995200000;
export const ALL_TIME_STATS_TIMESTAMP: AllTimeStatsTimestampType = 1640995200000;

export const chainConstants: Record<ChainId, Record<Env, Record<Version, ChainIdConstants>>> = {
  [ChainId.Mainnet]: {
    [Env.Dev]: {
      [Version.V1]: {
        networkName: ETHEREUM_NETWORK_NAME,
        scannerBase: ETHEREUM_CHAIN_SCANNER_BASE,
        wethAddress: ETHEREUM_WETH_ADDRESS,
        infinityContracts: {
          exchangeAddress: ETHEREUM_INFINITY_EXCHANGE_ADDRESS,
          obComplicationAddress: ETHEREUM_INFINITY_OB_COMPLICATION_ADDRESS,
          stakerAddress: ETHEREUM_STAKER_CONTRACT_ADDRESS_TEST,
          token: {
            address: ETHEREUM_TOKEN_CONTRACT_ADDRESS_TEST,
            name: 'Infinity Test Token',
            symbol: 'INFT',
            decimals: 18,
            chainId: ChainId.Mainnet
          }
        }
      },
      [Version.V2]: {
        networkName: ETHEREUM_NETWORK_NAME,
        scannerBase: ETHEREUM_CHAIN_SCANNER_BASE,
        wethAddress: ETHEREUM_WETH_ADDRESS,
        infinityContracts: {
          exchangeAddress: ETHEREUM_INFINITY_EXCHANGE_ADDRESS,
          obComplicationAddress: ETHEREUM_INFINITY_OB_COMPLICATION_ADDRESS,
          stakerAddress: ETHEREUM_STAKER_CONTRACT_ADDRESS_TEST,
          token: {
            address: ETHEREUM_TOKEN_CONTRACT_ADDRESS_TEST,
            name: 'Infinity Test Token',
            symbol: 'INFT',
            decimals: 18,
            chainId: ChainId.Mainnet
          }
        }
      }
    },
    [Env.Prod]: {
      [Version.V1]: {
        networkName: ETHEREUM_NETWORK_NAME,
        scannerBase: ETHEREUM_CHAIN_SCANNER_BASE,
        wethAddress: ETHEREUM_WETH_ADDRESS,
        infinityContracts: {
          exchangeAddress: ETHEREUM_INFINITY_EXCHANGE_ADDRESS,
          obComplicationAddress: ETHEREUM_INFINITY_OB_COMPLICATION_ADDRESS,
          stakerAddress: ETHEREUM_STAKER_CONTRACT_ADDRESS_TEST,
          token: {
            address: ETHEREUM_TOKEN_CONTRACT_ADDRESS_TEST,
            name: 'Infinity Test Token',
            symbol: 'INFT',
            decimals: 18,
            chainId: ChainId.Mainnet
          }
        }
      },
      [Version.V2]: {
        networkName: ETHEREUM_NETWORK_NAME,
        scannerBase: ETHEREUM_CHAIN_SCANNER_BASE,
        wethAddress: ETHEREUM_WETH_ADDRESS,
        infinityContracts: {
          exchangeAddress: ETHEREUM_INFINITY_EXCHANGE_ADDRESS,
          obComplicationAddress: ETHEREUM_INFINITY_OB_COMPLICATION_ADDRESS,
          stakerAddress: ETHEREUM_STAKER_CONTRACT_ADDRESS,
          token: {
            address: ETHEREUM_TOKEN_CONTRACT_ADDRESS,
            name: 'Infinity',
            symbol: 'INFT',
            decimals: 18,
            chainId: ChainId.Mainnet
          }
        }
      }
    }
  },
  [ChainId.Goerli]: {
    [Env.Dev]: {
      [Version.V1]: {
        networkName: GOERLI_NETWORK_NAME,
        scannerBase: GOERLI_CHAIN_SCANNER_BASE,
        wethAddress: GOERLI_WETH_ADDRESS,
        infinityContracts: {
          exchangeAddress: GOERLI_INFINITY_EXCHANGE_ADDRESS,
          obComplicationAddress: GOERLI_INFINITY_OB_COMPLICATION_ADDRESS,
          stakerAddress: GOERLI_STAKER_CONTRACT_ADDRESS,
          token: {
            address: GOERLI_TOKEN_CONTRACT_ADDRESS,
            name: 'Goerli Infinity',
            symbol: 'INFT',
            decimals: 18,
            chainId: ChainId.Goerli
          }
        }
      },
      [Version.V2]: {
        networkName: GOERLI_NETWORK_NAME,
        scannerBase: GOERLI_CHAIN_SCANNER_BASE,
        wethAddress: GOERLI_WETH_ADDRESS,
        infinityContracts: {
          exchangeAddress: GOERLI_INFINITY_EXCHANGE_ADDRESS,
          obComplicationAddress: GOERLI_INFINITY_OB_COMPLICATION_ADDRESS,
          stakerAddress: GOERLI_STAKER_CONTRACT_ADDRESS,
          token: {
            address: GOERLI_TOKEN_CONTRACT_ADDRESS,
            name: 'Goerli Infinity',
            symbol: 'INFT',
            decimals: 18,
            chainId: ChainId.Goerli
          }
        }
      }
    },
    [Env.Prod]: {
      [Version.V1]: {
        networkName: GOERLI_NETWORK_NAME,
        scannerBase: GOERLI_CHAIN_SCANNER_BASE,
        wethAddress: GOERLI_WETH_ADDRESS,
        infinityContracts: {
          exchangeAddress: GOERLI_INFINITY_EXCHANGE_ADDRESS,
          obComplicationAddress: GOERLI_INFINITY_OB_COMPLICATION_ADDRESS,
          stakerAddress: GOERLI_STAKER_CONTRACT_ADDRESS,
          token: {
            address: GOERLI_TOKEN_CONTRACT_ADDRESS,
            name: 'Goerli Infinity',
            symbol: 'INFT',
            decimals: 18,
            chainId: ChainId.Goerli
          }
        }
      },
      [Version.V2]: {
        networkName: GOERLI_NETWORK_NAME,
        scannerBase: GOERLI_CHAIN_SCANNER_BASE,
        wethAddress: GOERLI_WETH_ADDRESS,
        infinityContracts: {
          exchangeAddress: GOERLI_INFINITY_EXCHANGE_ADDRESS,
          obComplicationAddress: GOERLI_INFINITY_OB_COMPLICATION_ADDRESS,
          stakerAddress: GOERLI_STAKER_CONTRACT_ADDRESS,
          token: {
            address: GOERLI_TOKEN_CONTRACT_ADDRESS,
            name: 'Goerli Infinity',
            symbol: 'INFT',
            decimals: 18,
            chainId: ChainId.Goerli
          }
        }
      }
    }
  },
  [ChainId.Polygon]: {
    [Env.Dev]: {
      [Version.V1]: {
        networkName: POLYGON_NETWORK_NAME,
        scannerBase: POLYGON_CHAIN_SCANNER_BASE,
        wethAddress: POLYGON_WETH_ADDRESS,
        infinityContracts: {
          exchangeAddress: POLYGON_INFINITY_EXCHANGE_ADDRESS,
          obComplicationAddress: POLYGON_INFINITY_OB_COMPLICATION_ADDRESS,
          stakerAddress: '',
          token: {} as any
        }
      },
      [Version.V2]: {
        networkName: POLYGON_NETWORK_NAME,
        scannerBase: POLYGON_CHAIN_SCANNER_BASE,
        wethAddress: POLYGON_WETH_ADDRESS,
        infinityContracts: {
          exchangeAddress: POLYGON_INFINITY_EXCHANGE_ADDRESS,
          obComplicationAddress: POLYGON_INFINITY_OB_COMPLICATION_ADDRESS,
          stakerAddress: '',
          token: {} as any
        }
      }
    },
    [Env.Prod]: {
      [Version.V1]: {
        networkName: POLYGON_NETWORK_NAME,
        scannerBase: POLYGON_CHAIN_SCANNER_BASE,
        wethAddress: POLYGON_WETH_ADDRESS,
        infinityContracts: {
          exchangeAddress: POLYGON_INFINITY_EXCHANGE_ADDRESS,
          obComplicationAddress: POLYGON_INFINITY_OB_COMPLICATION_ADDRESS,
          stakerAddress: '',
          token: {} as any
        }
      },
      [Version.V2]: {
        networkName: POLYGON_NETWORK_NAME,
        scannerBase: POLYGON_CHAIN_SCANNER_BASE,
        wethAddress: POLYGON_WETH_ADDRESS,
        infinityContracts: {
          exchangeAddress: POLYGON_INFINITY_EXCHANGE_ADDRESS,
          obComplicationAddress: POLYGON_INFINITY_OB_COMPLICATION_ADDRESS,
          stakerAddress: '',
          token: {} as any
        }
      }
    }
  }
};

interface ChainIdConstants {
  networkName: string;
  scannerBase: string;
  wethAddress: string;
  infinityContracts: {
    exchangeAddress: string;
    obComplicationAddress: string;
    stakerAddress: string;
    token: Erc20TokenMetadata;
  };
}
