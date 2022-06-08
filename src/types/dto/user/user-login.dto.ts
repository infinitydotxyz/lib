import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEthereumAddress, IsNumber } from 'class-validator';
import { normalizeAddressTransformer } from '../../../transformers';

export class UserLoginDto {
  @ApiProperty({
    description: 'Last saved login nonce'
  })
  loginNonce: number;

  @ApiProperty({
    description: 'Last saved login nonce timestamp'
  })
  loginNonceTimestamp: number;
}

export class RandomLoginNonceDto {
  @ApiProperty({
    description: 'Random login nonce'
  })
  @IsNumber()
  nonce: number;
}

export class LoginNonceUserDto {
  @ApiProperty({
    description: 'Nonce the user signed in with'
  })
  @IsNumber()
  nonce!: number;

  @ApiProperty({
    description: 'Signed in user'
  })
  @IsEthereumAddress({
    message: 'Invalid address'
  })
  @Transform(normalizeAddressTransformer)
  user!: string;
}
