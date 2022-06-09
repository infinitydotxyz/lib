import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsEthereumAddress, IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { OBTokenInfoDto } from './ob-token-info.dto';

export class OBOrderItemDto {
  @ApiProperty({
    description: 'Collection address'
  })
  @IsString()
  @IsNotEmpty()
  @IsEthereumAddress()
  collectionAddress!: string;

  @ApiProperty({
    description: 'Collection name'
  })
  @IsString()
  @IsNotEmpty()
  collectionName!: string;

  @ApiProperty({
    description: 'Collection image'
  })
  @IsString()
  @IsNotEmpty()
  collectionImage!: string;

  @ApiProperty({
    description: 'Collection slug'
  })
  @IsString()
  @IsNotEmpty()
  collectionSlug!: string;

  @ApiProperty({
    description: 'Collection has blue check'
  })
  @IsBoolean()
  hasBlueCheck!: boolean;

  @ApiProperty({
    description: 'Tokens in the order'
  })
  @ValidateNested({ each: true })
  @Type(() => OBTokenInfoDto)
  @IsArray()
  tokens!: OBTokenInfoDto[];
}
