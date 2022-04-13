import { FormatDataSizeFunction } from '../types';

import { formatDataSize } from '.';

export const formatDataSizeToString = (
  ...args: Parameters<FormatDataSizeFunction>
) => {
  const result = formatDataSize(...args);

  return result ? `${result.value} ${result.unit}` : result;
};
