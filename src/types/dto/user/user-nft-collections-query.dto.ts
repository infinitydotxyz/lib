import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UserNftCollectionsQueryDto {
  @ApiPropertyOptional({
    description: `Search text for searching user's collections by name.`
  })
  @IsOptional()
  @IsString()
  search?: string;
}
