import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { RefreshTokenErrorJson, RefreshTokenFlow } from '../../../core';

class RefreshTokenErrorJsonDto implements RefreshTokenErrorJson {
  @ApiProperty({
    description: 'The error message'
  })
  message: string;

  @ApiProperty({
    description: 'Where the error occurred'
  })
  discriminator: RefreshTokenFlow;
}

class NftStateMetadataDto {
  @ApiProperty({
    description: 'The step the nft is on for getting metadata'
  })
  step: RefreshTokenFlow;

  @ApiPropertyOptional({
    description: 'An error message (if any)'
  })
  error?: RefreshTokenErrorJsonDto;
}

export class NftStateDto {
  @ApiProperty({
    description: 'Description of where the nft is in the process of getting metadata'
  })
  metadata: NftStateMetadataDto;
}
