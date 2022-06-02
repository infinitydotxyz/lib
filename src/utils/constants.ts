import { ChainId } from '../types/core';

const getEnvironmentVariable = (name: string, required = true) => {
  const variable = process.env[name];
  if (required && !variable) {
    throw new Error(`Missing environment variable ${name}`);
  }
  return variable;
};

// todo: remove unused constants
export const firestoreConstants = {
  COLLECTIONS_COLL: 'collections',
  DATA_SUB_COLL: 'data',
  USERS_COLL: 'users',
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
  USER_NFT_COLLECTION_COLL: 'nftCollections',
  SELL_ORDERS_COLL: 'sellOrders',
  BUY_ORDERS_COLL: 'buyOrders',
  ORDERS_COLL: 'orders',
  ORDER_ITEMS_SUB_COLL: 'orderItems',
  ORDER_MATCHES_COLL: 'orderMatches'
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

export const ETHEREUM_INFINITY_CREATORS_FEE_REGISTRY_ADDRESS =
  '0x31F320AE6b4c3F57B1e2E26E78359E1089C4D351'.toLowerCase();
export const ETHEREUM_INFINITY_CREATORS_FEE_MANAGER_ADDRESS = '0x2BDB98086d47e38e3A40B42463Af005F5CF72146'.toLowerCase();
export const ETHEREUM_INFINITY_EXCHANGE_ADDRESS = '0x3643e1f18E98B7dcaa199Ee64685040C764ca454'.toLowerCase();
export const ETHEREUM_INFINITY_OB_COMPLICATION_ADDRESS = '0x2Be9EE712944C6e391e9159c524D65301e5E6d4f'.toLowerCase();


// goerli
export const GOERLI_NETWORK_NAME = 'goerli';
export const GOERLI_CHAIN_SCANNER_BASE = 'https://goerli.etherscan.io';
export const GOERLI_WETH_ADDRESS = '0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6'.toLowerCase();

export const GOERLI_INFINITY_CREATORS_FEE_REGISTRY_ADDRESS = '0xD5A3015Bcb77E3685DFd22Bc40424C0F1F67b2Fd'.toLowerCase();
export const GOERLI_INFINITY_CREATORS_FEE_MANAGER_ADDRESS = '0x3129B14e3f90670262f3151d1d207e142e19731d'.toLowerCase();
export const GOERLI_INFINITY_EXCHANGE_ADDRESS = '0x2e8Ffca577F52a62B9742EF1160923bCeA0f3Ba8'.toLowerCase();
export const GOERLI_INFINITY_OB_COMPLICATION_ADDRESS = '0x13b4724f2Ec3288D132beb81Ef5153428E86f241'.toLowerCase();

// polygon
export const POLYGON_NETWORK_NAME = 'polygon';
export const POLYGON_CHAIN_SCANNER_BASE = 'https://polygonscan.com';
export const POLYGON_WETH_ADDRESS = '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619'.toLowerCase();

export const POLYGON_INFINITY_TOKEN_ADDRESS = '0xF45793A9e8f14E4448cdaE6B21C0606cBE9ea221'.toLowerCase();
export const POLYGON_INFINITY_CURRENCY_REGISTRY_ADDRESS = '0x9b318C69a4D4DcFD50cE3A4B7ED2597bd6d7ac18'.toLowerCase();
export const POLYGON_INFINITY_COMPLICATION_REGISTRY_ADDRESS =
  '0xbCc3ce28eC5E646d3AF11E269dA3877Ea84721cf'.toLowerCase();
export const POLYGON_INFINITY_EXCHANGE_ADDRESS = '0x5c600fff0AC90cdF026a16E4E315a2471F7BF7A6'.toLowerCase();
export const POLYGON_INFINITY_OB_COMPLICATION_ADDRESS = '0x748C74994fFF570D7E3fd14f25c17C3D9702832c'.toLowerCase();
export const POLYGON_INFINITY_STAKER_ADDRESS = '0xc14Bce7D2b1829EF27092e4efD0CE77F2489e984'.toLowerCase();
export const POLYGON_INFINITY_TRADING_REWARDS_ADDRESS = '0x3f138B76c72Eb84ab7894F1d6506F8CEA7071aA9'.toLowerCase();
export const POLYGON_INFINITY_CREATORS_FEE_REGISTRY_ADDRESS =
  '0x9654BeE11276f6F9D5A28783d4dAfeeA8CA00E2C'.toLowerCase();
export const POLYGON_INFINITY_CREATORS_FEE_MANAGER_ADDRESS = '0xfBf5b55D30e7f49D371b6A7250179Be41173670a'.toLowerCase();
export const POLYGON_INFINITY_FEE_TREASURY_ADDRESS = '0x75Eb52b9db465d497Ab35CE7F9522BdA159d74DD'.toLowerCase();

/**
 * arbitrary but consistent timestamp to allow us to get all stats using the same
 * firestore indices as stats where the timestamp changes based on the doc id
 */
export type AllTimeStatsTimestampType = 1640995200000;
export const ALL_TIME_STATS_TIMESTAMP: AllTimeStatsTimestampType = 1640995200000;

// todo: remove unnecessary addresses
export const chainConstants: Record<ChainId, ChainIdConstants> = {
  [ChainId.Mainnet]: {
    networkName: ETHEREUM_NETWORK_NAME,
    scannerBase: ETHEREUM_CHAIN_SCANNER_BASE,
    wethAddress: ETHEREUM_WETH_ADDRESS,
    infinityContracts: {
      exchangeAddress: ETHEREUM_INFINITY_EXCHANGE_ADDRESS,
      obComplicationAddress: ETHEREUM_INFINITY_OB_COMPLICATION_ADDRESS,
      creatorsFeeRegistryAddress: ETHEREUM_INFINITY_CREATORS_FEE_REGISTRY_ADDRESS,
      creatorsFeeManagerAddress: ETHEREUM_INFINITY_CREATORS_FEE_MANAGER_ADDRESS
    }
  },
  [ChainId.Goerli]: {
    networkName: GOERLI_NETWORK_NAME,
    scannerBase: GOERLI_CHAIN_SCANNER_BASE,
    wethAddress: GOERLI_WETH_ADDRESS,
    infinityContracts: {
      exchangeAddress: GOERLI_INFINITY_EXCHANGE_ADDRESS,
      obComplicationAddress: GOERLI_INFINITY_OB_COMPLICATION_ADDRESS,
      creatorsFeeRegistryAddress: GOERLI_INFINITY_CREATORS_FEE_REGISTRY_ADDRESS,
      creatorsFeeManagerAddress: GOERLI_INFINITY_CREATORS_FEE_MANAGER_ADDRESS
    }
  },
  [ChainId.Polygon]: {
    networkName: POLYGON_NETWORK_NAME,
    scannerBase: POLYGON_CHAIN_SCANNER_BASE,
    wethAddress: POLYGON_WETH_ADDRESS,
    infinityContracts: {
      exchangeAddress: POLYGON_INFINITY_EXCHANGE_ADDRESS,
      obComplicationAddress: POLYGON_INFINITY_OB_COMPLICATION_ADDRESS,
      creatorsFeeRegistryAddress: POLYGON_INFINITY_CREATORS_FEE_REGISTRY_ADDRESS,
      creatorsFeeManagerAddress: POLYGON_INFINITY_CREATORS_FEE_MANAGER_ADDRESS
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
    creatorsFeeRegistryAddress: string;
    creatorsFeeManagerAddress: string;
  };
}
