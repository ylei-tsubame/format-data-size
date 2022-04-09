type DataSize =
  | {
      value: string;
      unit: DataSizeUnit;
    }
  | [string, DataSizeUnit]
  | string;
