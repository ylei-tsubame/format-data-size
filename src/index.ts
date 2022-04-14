export type {
  DataSize,
  DataSizeUnit,
  FormatDataSizeInputValue,
  FormatDataSizeOptions,
  PrecisionControl,
  TargetDataSizeUnit,
} from './types';

export {
  formatDataSize,
  formatDataSize as dSize,
  formatDataSizeToString,
  formatDataSizeToString as dSizeStr,
} from './lib';
