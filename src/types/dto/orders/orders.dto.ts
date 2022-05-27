import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested, IsArray } from 'class-validator';
import { CreateOrderDto } from './signed-ob-order.dto';

export class OrdersDto {
  @ApiProperty({
    description: 'Orders to be saved',
    type: [CreateOrderDto]
  })
  @ValidateNested({ each: true, message: 'Invalid signed order' })
  @Type(() => CreateOrderDto)
  @IsArray()
  orders!: CreateOrderDto[];
}
