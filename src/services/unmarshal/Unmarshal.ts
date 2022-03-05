export interface UnmarshalUserAssetResponse {
  items_on_page: number;
  page: number;
  total_pages: number;
  total_assets: number;
  nft_assets: UnmarshalNFTAsset[];
}

export interface UnmarshalNFTAsset {
  asset_contract: string;
  token_id: string;
  owner?: string;
  external_link?: string;
  type?: string;
  balance?: number;
  nft_metadata?: UnmarhsalNftMetadatum[];
  issuer_specific_data?: UnmarshalIssuerSpecificData;
  price?: string;
  animation_url?: string;
  description?: string;
  traits?: UnmarhsalNftMetadatum[];
}

export interface UnmarshalIssuerSpecificData {
  entire_response?: string;
  image_url?: string;
  name?: string;
}

export interface UnmarhsalNftMetadatum {
  trait_type?: string;
  value?: number | string;
  display_type?: string;
}
