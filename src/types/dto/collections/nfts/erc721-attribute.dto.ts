import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { DisplayType } from '../../../core';

export class Erc721AttributeDto {
  @ApiProperty({
    description: 'The trait value'
  })
  value: string | number;

  @ApiPropertyOptional({
    description: 'The display type for the attribute',
    enum: DisplayType
  })
  display_type?: DisplayType;

  @ApiPropertyOptional({
    description: 'Trait type'
  })
  trait_type?: string;
}
