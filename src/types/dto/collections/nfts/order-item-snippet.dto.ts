import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsOptional, IsString, ValidateNested } from 'class-validator';
import { OrderItemSnippet } from '../../../core';
import { FirestoreOrderItemDto } from '../../orders';

export class OrderItemSnippetDto implements OrderItemSnippet {
  @ApiProperty({
    description: 'Whether there is a corresponding order'
  })
  @IsBoolean()
  hasOrder: boolean;

  @ApiPropertyOptional({
    description: 'Unique id of the order item'
  })
  @IsOptional()
  @IsString()
  orderItemId?: string;

  @ApiPropertyOptional({
    description: 'The order item, if any'
  })
  @IsOptional()
  @ValidateNested({ message: 'Invalid order item' })
  @Type(() => FirestoreOrderItemDto)
  orderItem?: FirestoreOrderItemDto | null;
}
