type ConvertOptions = {
  isReverse?: boolean;
  precision?: number;
};

type ConvertFunction = (
  value: bigint,
  unit: DataSizeUnit,
  options?: ConvertOptions,
) => [bigint, bigint];
