import { registerDecorator, ValidationOptions } from 'class-validator';

export const MIN_USERNAME_CHARS = 3;
export const MAX_USERNAME_CHARS = 14;
export const usernameChars = '[a-zA-Z0-9_]';
export const usernameCharRegex = new RegExp(`[^${usernameChars}]`, 'g');
const supportedChars = 'alphanumeric characters and underscores';
export const usernameConstraints = `Username must be between ${MIN_USERNAME_CHARS} and ${MAX_USERNAME_CHARS} characters long and can contain only ${supportedChars}`;
export const MAX_DISPLAY_NAME_CHARS = 50;
export const MAX_BIO_CHARS = 160;

export const usernameRegex = new RegExp(`^${usernameChars}{${MIN_USERNAME_CHARS},${MAX_USERNAME_CHARS}}$`);

export function isValidUsername(value: string) {
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
