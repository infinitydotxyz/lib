import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsObject, IsOptional, ValidateNested } from 'class-validator';
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

  /**
   * @deprecated Attributes are no longer stored in the collection document.
   * Please fetch attributes from the 'attributes' subcollection instead.
   * Update your code to something like this: `const attributesDoc = collectionDoc.collection(COLLECTION_NFTS_ATTRIBUTES).doc('AttributeTypeExample');`
   */
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
