import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UserNftCollectionsQueryDto {
  @ApiPropertyOptional({
    description: `Search text for searching user's collections by name.`
  })
  @IsOptional()
  @IsString()
  search?: string;
}

export interface UserCollectionsQuery {
  chainId?: string;
  hideSpam?: boolean;
  limit?: number;
  cursor?: string;
  orderBy?: string;
  orderDirection?: string;
  hideAirdrops?: boolean;
  spamConfidenceLevel?: string;
}

export interface UserCollectionsResponse {
  data: UserCollection[];
  cursor: string;
  hasNextPage: boolean;
}

export interface UserCollection {
  address: string;
  numNFTs: number;
  name: string;
  symbol: string;
  imageUrl: string;
  floorPrice: number;
}
