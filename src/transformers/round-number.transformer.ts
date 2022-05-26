import { TransformFnParams } from 'class-transformer';
import { round } from 'lodash';

// TODO: remove lodash dep. and use singlar utility function instead? https://github.com/lodash/lodash/blob/c6e281b878b315c7a10d90f9c2af4cdb112d9625/_createRound.js#L17

export function roundNumberTransformer(precision: number) {
  return (params: TransformFnParams): number | undefined => {
    const value = parseFloat(params.value);
    if (!Number.isNaN(value)) {
      return round(value, precision);
    }
    return undefined;
  };
}
