import { ApiProperty } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { ValidateNested, IsString, IsNumber, IsNotEmpty, IsEthereumAddress, IsNumberString } from 'class-validator';
import { normalizeAddressTransformer } from '../../../transformers';
import { SignedOBOrder } from '../../core';
import { ChainOBOrderDto } from './chain-ob-order.dto';
import { ExecParamsDto } from './exec-params.dto';
import { ExtraParamsDto } from './extra-params.dto';
import { OBOrderItemDto } from './ob-order-item.dto';

export class SignedOBOrderDto implements SignedOBOrder {
  @ApiProperty({
    description: 'id of the order'
  })
  id: string;

  @ApiProperty({
    description: 'Whether the order is a sell order or not'
  })
  isSellOrder: boolean;

  @ApiProperty({
    description: 'The username of the maker of the order'
  })
  makerUsername: string;

  @ApiProperty({
    description: 'The maker of the order'
  })
  @Transform(normalizeAddressTransformer)
  @IsEthereumAddress()
  makerAddress: string;

  @ApiProperty({
    description: 'Order items in this order'
  })
  @ValidateNested({ message: 'Invalid ob order item' })
  @Type(() => OBOrderItemDto)
  nfts: OBOrderItemDto[];

  @ApiProperty({
    description: 'Chain id'
  })
  @IsString()
  @IsNotEmpty()
  chainId: string;

  @ApiProperty({
    description: 'Number of items in the order'
  })
  @IsNumber()
  numItems: number;

  @ApiProperty({
    description: 'Starting price in ETH of the order'
  })
  @IsNumber()
  startPriceEth: number;

  @ApiProperty({
    description: 'Ending price in ETH of the order'
  })
  @IsNumber()
  endPriceEth: number;

  @ApiProperty({
    description: 'Starting time in milliseconds since epoch of the order'
  })
  @IsNumber()
  startTimeMs: number;

  @ApiProperty({
    description: 'Ending time in milliseconds since epoch of the order'
  })
  @IsNumber()
  endTimeMs: number;

  @ApiProperty({
    description: 'Order nonce'
  })
  @IsNumberString()
  nonce: string;

  @ApiProperty({
    description: 'Execution params like txn currency and type of order'
  })
  @ValidateNested({ message: 'Invalid exec params' })
  @Type(() => ExecParamsDto)
  execParams: ExecParamsDto;

  @ApiProperty({
    description: 'Extra params for the order'
  })
  @ValidateNested({ message: 'Invalid extra params' })
  @Type(() => ExtraParamsDto)
  extraParams: ExtraParamsDto;

  @ApiProperty({
    description: 'Order in the format required by exchange contracts'
  })
  @ValidateNested({ message: 'Invalid signed order' })
  @Type(() => ChainOBOrderDto)
  signedOrder: ChainOBOrderDto;
}
