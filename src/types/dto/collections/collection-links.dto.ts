import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Links } from '../../core';

export class CollectionLinksDto implements Links {
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  timestamp!: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  twitter?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  discord?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  external?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  medium?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  slug?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  telegram?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  instagram?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  wiki?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  facebook?: string;
}
