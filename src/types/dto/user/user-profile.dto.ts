import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEthereumAddress, IsNumber, IsString, MaxLength } from 'class-validator';
import { IsUsername } from '../../../decorators';
import { normalizeAddressTransformer } from '../../../transformers/normalize-address.transformer';

export const MIN_USERNAME_CHARS = 3;
export const MAX_USERNAME_CHARS = 14;
export const usernameChars = '[a-zA-Z0-9_]';
export const usernameCharRegex = new RegExp(`[^${usernameChars}]`, 'g');
export const usernameRegex = new RegExp(`^${usernameChars}{${MIN_USERNAME_CHARS},${MAX_USERNAME_CHARS}}$`);
const supportedChars = 'alphanumeric characters and underscores';
export const usernameConstraints = `Username must be between ${MIN_USERNAME_CHARS} and ${MAX_USERNAME_CHARS} characters long and can contain only ${supportedChars}`;
export const MAX_DISPLAY_NAME_CHARS = 50;
export const MAX_BIO_CHARS = 160;

export class UserProfileDto {
  @ApiProperty({
    description: "User's main wallet address"
  })
  @IsEthereumAddress({
    message: 'Invalid address'
  })
  @Transform(normalizeAddressTransformer)
  address!: string;

  @ApiProperty({
    description: 'Non-unique name of the user'
  })
  @IsString()
  @MaxLength(MAX_DISPLAY_NAME_CHARS)
  displayName!: string;

  @ApiProperty({
    description: `Unique username for the user. ${usernameConstraints}`
  })
  @IsUsername({ message: `Invalid username. ${usernameConstraints}` })
  username!: string;

  @ApiProperty({
    description: `User's bio. Max ${MAX_BIO_CHARS} characters`
  })
  @IsString()
  @MaxLength(MAX_BIO_CHARS)
  bio!: string;

  @ApiProperty({
    description: "User's profile image"
  })
  @IsString()
  profileImage!: string;

  @ApiProperty({
    description: "User's banner image"
  })
  @IsString()
  bannerImage!: string;

  @ApiProperty({
    description: "User's discord username"
  })
  @IsString()
  discordUsername!: string;

  @ApiProperty({
    description: "User's twitter username"
  })
  @IsString()
  twitterUsername!: string;

  @ApiProperty({
    description: "User's instagram username"
  })
  @IsString()
  instagramUsername!: string;

  @ApiProperty({
    description: "User's facebook username"
  })
  @IsString()
  facebookUsername!: string;

  @ApiProperty({
    description: "Date the user's profile was created. Epoch ms"
  })
  @IsNumber()
  createdAt!: number;

  @ApiProperty({
    description: "Date the user's profile was updated. Epoch ms"
  })
  @IsNumber()
  updatedAt!: number;
}
