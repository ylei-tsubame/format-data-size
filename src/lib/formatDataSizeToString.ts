import { FormatDataSizeInputValue, FormatDataSizeOptions } from '../types';

import { formatDataSize } from '.';

export const formatDataSizeToString = (
  ...args: [FormatDataSizeInputValue, FormatDataSizeOptions]
) => {
  const result = formatDataSize(...args);

  return result ? `${result.value} ${result.unit}` : result;
};
