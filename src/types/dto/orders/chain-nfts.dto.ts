import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsArray, IsEthereumAddress, ValidateNested } from 'class-validator';
import { normalizeAddressTransformer } from '../../../transformers/normalize-address.transformer';
import { ChainTokensDto } from './chain-tokens.dto';

export class ChainNFTsDto {
  @ApiProperty({
    description: 'Collection address'
  })
  @IsEthereumAddress()
  @Transform(normalizeAddressTransformer)
  collection!: string;

  @ApiProperty({
    description: 'Tokens in the order',
    type: [ChainTokensDto]
  })
  @IsArray()
  @ValidateNested({ message: 'Invalid chain tokens' })
  @Type(() => ChainTokensDto)
  tokens!: ChainTokensDto[];
}
