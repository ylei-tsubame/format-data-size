import { BigFloat, DataSizeUnit } from '.';

export type ConvertOptions = {
  isReverse?: boolean;
};

export type ConvertFunction = (
  value: BigFloat,
  unit: DataSizeUnit,
  options?: ConvertOptions,
) => BigFloat;
