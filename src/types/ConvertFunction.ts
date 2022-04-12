import { DataSizeUnit } from '.';

export type ConvertOptions = {
  isReverse?: boolean;
  precision?: number;
};

export type ConvertFunction = (
  value: bigint,
  unit: DataSizeUnit,
  options?: ConvertOptions,
) => [bigint, string];
