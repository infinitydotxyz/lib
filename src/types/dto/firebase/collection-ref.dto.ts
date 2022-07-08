import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEthereumAddress, IsOptional, IsString } from 'class-validator';
import { IsSupportedChainId } from '../../../decorators/is-supported-chain-id.decorator';
import { normalizeAddressTransformer } from '../../../transformers/normalize-address.transformer';
import { ChainId } from '../../core';

export class CollectionViaSlugDto {
  @ApiPropertyOptional({
    description: 'Collection Slug'
  })
  @IsString({
    message: 'Invalid slug'
  })
  @IsOptional()
  readonly slug: string;
}

export class CollectionViaAddressDto {
  @ApiPropertyOptional({
    description: 'Collection Address'
  })
  @IsEthereumAddress({
    message: 'Invalid address'
  })
  @Transform(normalizeAddressTransformer)
  readonly address: string;

  @ApiProperty({
    description: 'Collection chain id',
    enum: ChainId
  })
  @IsSupportedChainId({
    message: 'Invalid chainId'
  })
  readonly chainId: ChainId;
}

export type CollectionRefDto = CollectionViaAddressDto | CollectionViaSlugDto;
