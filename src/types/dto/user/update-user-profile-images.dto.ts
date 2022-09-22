import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';
import { parseBoolTransformer } from '../../../transformers/parse-bool.transformer';

export class UserProfileImagesDto {
  @ApiPropertyOptional({
    description: 'Profile image to upload',
    type: 'file',
    format: 'binary'
  })
  profileImage: Express.Multer.File[];

  @ApiPropertyOptional({
    description: 'Banner image to upload',
    type: 'file',
    format: 'binary'
  })
  bannerImage: Express.Multer.File[];
}

export class DeleteUserProfileImagesDto {
  @ApiPropertyOptional({
    description: 'Whether to remove the current profile image'
  })
  @Transform(parseBoolTransformer({ optional: true }))
  @IsBoolean()
  @IsOptional()
  deleteProfileImage?: boolean;

  @ApiPropertyOptional({
    description: 'Whether to remove the current banner image'
  })
  @Transform(parseBoolTransformer({ optional: true }))
  @IsBoolean()
  @IsOptional()
  deleteBannerImage?: boolean;
}

// from swagger
export interface TypeX<T = any> extends Function {
  new (...args: any[]): T;
}
declare function IntersectionTypeX<A, B>(classARef: TypeX<A>, classBRef: TypeX<B>): TypeX<A & B>;

export class UpdateUserProfileImagesDto extends IntersectionTypeX(UserProfileImagesDto, DeleteUserProfileImagesDto) {}
