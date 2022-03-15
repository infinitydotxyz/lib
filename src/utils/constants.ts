const getEnvironmentVariable = (name: string, required = true) => {
  const variable = process.env[name];
  if (required && !variable) {
    throw new Error(`Missing environment variable ${name}`);
  }
  return variable;
};

export const firestoreConstants = {
  COLLECTIONS_COLL: 'collections',
  COLLECTION_DATA_COLL: 'data',
  NFT_DATA_COLL: 'data',
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
  VOTES_COLL: 'votes',
  COLLECTION_STATS_COLL: 'collectionStats',
  COLLECTION_STATS_DOC: 'collectionStats', // TODO deprecate
  COLLECTION_NFTS_COLL: 'nfts',
  NFT_STATS_COLL: 'nftStats', // TODO deprecate
  NFT_STATS_DOC: 'nftStats',
  COLLECTION_LINKS_DOC: 'links',
  COLLECTION_OPENSEA_STATS_DOC: 'opensea',
  COLLECTION_TWITTER_DOC: 'twitter',
  COLLECTION_DISCORD_DOC: 'discord',
  AUTH_COLL: 'auth',
  EDITORS_DOC: 'editors',
  CREATOR_DOC: 'creator',
  ADMINS_DOC: 'admins',

  FEED_COLL: 'feed',

  COLLECTION_FOLLOWS_COLL: 'collectionFollows',
  USER_FOLLOWS_COLL: 'userFollows',
  SELL_ORDERS_COLL: 'sellOrders',
  BUY_ORDERS_COLL: 'buyOrders'

};

export const WYVERN_EXCHANGE_ADDRESS = '0x7f268357a8c2552623316e2562d90e642bb538e5';

export const WYVERN_ATOMIC_MATCH_FUNCTION = 'atomicMatch_';
export const WYVERN_CANCEL_ORDER_FUNCTION = 'cancelOrder_';
export const NULL_HASH = '0x0000000000000000000000000000000000000000000000000000000000000000';
export const NULL_ADDRESS = '0x0000000000000000000000000000000000000000';

export const ETHEREUM_WETH_ADDRESS = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
export const POLYGON_WETH_ADDRESS = '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619';

export const TRACE_LOG = getEnvironmentVariable('TRACE_LOG', false) === 'true';
export const INFO_LOG = getEnvironmentVariable('INFO_LOG', false) === 'true';
export const ERROR_LOG = getEnvironmentVariable('ERROR_LOG', false) === 'true';
export const WARN_LOG = getEnvironmentVariable('WARN_LOG', false) === 'true';
