export const sanitizeInputValue = (value: unknown, fallbackValue = '0') => {
  const valueType = typeof value;

  let knownValue: string = fallbackValue;

  switch (valueType) {
    case 'number':
      knownValue = (value as number).toString();
      break;
    case 'bigint':
      knownValue = (value as bigint).toString();
      break;
    case 'string':
      knownValue = value as string;
      break;
    default:
      throw Error(`Unexpected input value; value=${value}, type=${valueType}.`);
  }

  return knownValue;
};
