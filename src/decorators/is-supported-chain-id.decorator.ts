import { registerDecorator, ValidationOptions } from 'class-validator';
import { ChainId } from '../types/core';

export function IsSupportedChainId(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isSupportedChainId',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          for (const validChainId of Object.values(ChainId)) {
            if (value === validChainId) {
              return true;
            }
          }
          return false;
        }
      }
    });
  };
}
