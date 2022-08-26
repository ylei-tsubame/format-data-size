import {
  BigFloat,
  ConversionTable,
  ConvertFunction,
  ConvertOptions,
  DataSizeUnit,
} from '../types';

import { CONVERSION_TABLE } from '../consts';

import { p10n } from './p10n';

export const convert: ConvertFunction = (
  { precision, value }: BigFloat,
  unit: DataSizeUnit,
  { isReverse }: ConvertOptions = {},
) => {
  if (unit === 'b') {
    return { precision, value };
  }

  const convertKey: keyof Readonly<ConversionTable> = `b-${unit}`;
  const convertMultiplier: bigint = CONVERSION_TABLE[convertKey];

  if (isReverse) {
    return {
      precision,
      value: value * convertMultiplier,
    };
  }

  // Increase precision to ensure correct rounding.
  // TODO: record the convert multiplier length in the conversion table because
  // it's constant.
  const shift = String(convertMultiplier).length;
  const shiftMultiplier = p10n(shift);
  const converted = (value * shiftMultiplier) / convertMultiplier;

  return {
    precision: precision + shift,
    value: converted,
  };
};
