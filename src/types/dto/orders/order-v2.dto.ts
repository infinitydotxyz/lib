import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsEnum, ValidateNested } from 'class-validator';
import { ChainId } from '../../core';
import { ChainOBOrderDto } from './chain-ob-order.dto';

export class OrdersV2Dto {
  @ApiProperty({
    description: 'Orders to be saved',
    type: [ChainOBOrderDto]
  })
  @ValidateNested({ each: true, message: 'Invalid order' })
  @Type(() => ChainOBOrderDto)
  @IsArray()
  orders: ChainOBOrderDto[];

  @ApiProperty({
    description: 'Chain id',
    enum: ChainId
  })
  @IsEnum(ChainId)
  chainId: ChainId;
}
