import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsBoolean, IsObject, IsOptional, ValidateNested } from 'class-validator';
import { normalizeAddressTransformer } from '../../../transformers';
import { ChainId, Collection, CollectionAttributes, TokenStandard } from '../../core';
import { CollectionMetaDataDto, PartialCollectionMetadataDto } from './collection-metadata.dto';
import { CollectionStateDto } from './collection-state.dto';

type CollectionType = Omit<Collection, 'tokenStandard'> & { tokenStandard: TokenStandard };

export class CollectionDto implements CollectionType {
  @ApiProperty({
    description: 'Collection token standard',
    enum: TokenStandard
  })
  tokenStandard!: TokenStandard;

  @ApiProperty({
    description: 'Collection chain id',
    enum: ChainId
  })
  chainId!: string;

  @ApiProperty({
    description: 'Collection address'
  })
  @Transform(normalizeAddressTransformer)
  address!: string;

  @ApiProperty({
    description: 'Indicates whether the collection is verified'
  })
  hasBlueCheck!: boolean;

  @ApiProperty({
    description: 'Address that deployed the contract'
  })
  deployer!: string;

  @ApiProperty({
    description: 'Epoch timestamp (ms) that the contract was deployed at'
  })
  deployedAt!: number;

  @ApiProperty({
    description: 'Block that the contract was deployed at'
  })
  deployedAtBlock!: number;

  @ApiProperty({
    description: 'Owner of the contract'
  })
  owner!: string;

  @ApiProperty({
    description: 'Number of owners of nfts in the collection'
  })
  numOwners?: number;

  /**
   * Total number of votes from curators.
   *
   * Please keep in mind that this value does NOT represent the amount of curators, but only the TOTAL SUM of all votes from curators.
   * If you need to know the former, read the `numCurators` field instead.
   */
  @ApiProperty({
    description: 'Number of votes from curators'
  })
  numCuratorVotes?: number;

  /**
   * Total amount of curators.
   */
  @ApiProperty({
    description: 'Total amount of curators'
  })
  numCurators?: number;

  @ApiProperty({
    description: 'Epoch  timestamp (ms) that numOwners was updated at'
  })
  numOwnersUpdatedAt!: number;

  @ApiProperty({
    description: 'Metadata about the collection'
  })
  @IsObject()
  @ValidateNested()
  @Type(() => CollectionMetaDataDto)
  metadata!: CollectionMetaDataDto;

  @ApiProperty({
    description: 'Slug of the collection'
  })
  slug!: string;

  @ApiProperty({
    description: 'Total supply'
  })
  numNfts!: number;

  @ApiProperty({
    description: 'Attributes (i.e. traits) for the collection',
    deprecated: true
  })
  attributes!: CollectionAttributes;

  @ApiProperty({
    description: 'Total number of trait types'
  })
  numTraitTypes!: number;

  @ApiProperty({
    description: 'Address of the user that initiated indexing'
  })
  indexInitiator!: string;

  @ApiProperty({
    description: 'Current state of the collection indexing process'
  })
  @ValidateNested()
  @Type(() => CollectionStateDto)
  state!: CollectionStateDto;
}

export class UpdateCollectionDto {
  @ApiPropertyOptional({
    description: 'Whether to remove the current profile image'
  })
  @IsOptional()
  @IsBoolean()
  deleteProfileImage?: boolean;

  @ApiPropertyOptional({
    name: 'profileImage',
    description: 'Profile picture',
    required: false,
    type: 'file'
  })
  profileImage?: string;

  @ApiPropertyOptional({
    description: 'Metadata about the collection'
  })
  @ValidateNested()
  @Type(() => CollectionMetaDataDto)
  metadata?: PartialCollectionMetadataDto;
}

export class PaginatedCollectionsDto {
  data: Collection[];
  cursor?: string;
  hasNextPage: boolean;
}
