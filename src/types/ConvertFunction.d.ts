type ConvertOptions = { isReverse?: boolean };

type ConvertFunction = (
  value: bigint,
  unit: DataSizeUnit,
  options?: ConvertOptions,
) => [bigint, bigint];
