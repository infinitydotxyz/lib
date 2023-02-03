export interface FlattenedPostgresNFTSale {
  txhash: string;
  log_index: number;
  bundle_index: number;
  block_number: number;
  marketplace: string;
  marketplace_address: string;
  seller: string;
  buyer: string;
  quantity: string;
  collection_address: string;
  collection_name: string;
  token_id: string;
  token_image: string;
  sale_timestamp: number;
  sale_price: string;
  sale_price_eth: number;
  sale_currency_address: string;
  sale_currency_decimals: number;
  sale_currency_symbol: string;
}

export interface PostgresOrder {
  id: string;
  is_sell_order: boolean;
  price_eth: number;
  collection_address: string;
  token_id: string;
  collection_name: string;
  collection_image: string;
  token_image: string;
  start_time_millis: number;
  end_time_millis: number;
  maker: string;
  marketplace: string;
  marketplace_address: string;
  is_private: boolean;
  is_complex: boolean;
  is_active: boolean;
  is_cancelled: boolean;
  is_fillable: boolean;
}
