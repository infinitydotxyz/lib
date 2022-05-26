import { registerDecorator, ValidationOptions } from 'class-validator';
import { MAX_USERNAME_CHARS, MIN_USERNAME_CHARS, usernameChars } from '../types/dto/user';

export const usernameRegex = new RegExp(`^${usernameChars}{${MIN_USERNAME_CHARS},${MAX_USERNAME_CHARS}}$`);

function isValidUsername(value: string) {
  if (typeof value !== 'string') {
    return false;
  }
  const isValid = usernameRegex.test(value);
  return isValid;
}

export function IsUsername(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isUsername',
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: {
        validate(value: string) {
          return isValidUsername(value);
        }
      }
    });
  };
}
