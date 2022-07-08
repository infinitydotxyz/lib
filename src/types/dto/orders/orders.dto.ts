import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested, IsArray } from 'class-validator';
import { SignedOBOrderWithoutMetadataDto } from './signed-ob-order.dto';

export class OrdersDto {
  @ApiProperty({
    description: 'Orders to be saved',
    type: [SignedOBOrderWithoutMetadataDto]
  })
  @ValidateNested({ each: true, message: 'Invalid signed order' })
  @Type(() => SignedOBOrderWithoutMetadataDto)
  @IsArray()
  orders: SignedOBOrderWithoutMetadataDto[];
}
