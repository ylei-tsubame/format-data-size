import { DataSizeUnit, FormatDataSizeOptions } from './types';

import { formatDataSizeToString } from './lib';

const getArgs = (
  argv: string[],
  optionHandlers: Record<
    string,
    (
      options: Record<string, boolean | string>,
      current: string,
      next: string | undefined,
    ) => number
  >,
) => {
  const positionalArgv = argv.slice(2);

  const args: {
    options: Record<string, boolean | string>;
    positionals: string[];
  } = {
    options: {},
    positionals: [],
  };

  for (
    let positionalArgvIndex = 0;
    positionalArgvIndex < positionalArgv.length;
    positionalArgvIndex += 1
  ) {
    let current: string = positionalArgv[positionalArgvIndex];
    let next: string | undefined = positionalArgv[positionalArgvIndex + 1];

    if (/^--/.test(current)) {
      current = current.substring(2);

      if (/^--/.test(next)) {
        next = undefined;
      }

      positionalArgvIndex +=
        optionHandlers[current]?.call(null, args.options, current, next) ?? 0;
    } else {
      args.positionals.push(current);
    }
  }

  return args;
};

const handleOption = (
  valueOnSet: boolean | string,
  isAcceptParameter: boolean,
  options: Record<string, boolean | string>,
  current: string,
  next?: string,
): number => {
  let indexIncrement = 0;

  options[current] = valueOnSet;

  if (isAcceptParameter && next) {
    options[current] = next;
    indexIncrement = 1;
  }

  return indexIncrement;
};

const getDataSizeUnit = (unit: unknown) =>
  unit ? (unit as DataSizeUnit) : undefined;

const getPrecision = (precision: unknown) => {
  let result = undefined;

  if (typeof precision === 'string') {
    const postSplit = precision.split(',', 2);

    if (postSplit.length === 2) {
      result = {
        min: parseInt(postSplit[0]),
        max: parseInt(postSplit[1]),
      };
    } else if (postSplit.length === 1) {
      result = parseInt(postSplit[0]);
    }
  }

  return result;
};

(() => {
  const {
    options: { from, help, locale, precision, to },
    positionals: [value],
  } = getArgs(process.argv, {
    from: (options, current, next) =>
      handleOption('', true, options, current, next),
    help: (options, current) => handleOption(true, false, options, current),
    locale: (options, current, next) =>
      handleOption(true, true, options, current, next),
    precision: (options, current, next) =>
      handleOption('', true, options, current, next),
    to: (options, current, next) =>
      handleOption('', true, options, current, next),
  });

  if (help) {
    process.stdout.write(
      `
Usage: npx format-data-size [...options] <value>

<options>:
  --from <unit>
    Specifies the data unit of the provided value.

  --help
    Shows this simple help message. For more details, please refer to the README.

  --locale [bcp 47 tag]
    Specifies the locale of the output. This only affects the numbers,
    grouping characters, and decimal character.

  --precision [<number of fraction digits>]
    Specifies the result's precision.

  --to <unit>
    Specifies which unit or type of units to format the input to. Can include
    one of 'byte', 'ibyte' (binary), 'bit', or 'ibit' (binary).

<value>:
  Specifies the value to convert and format.
\n`,
    );

    return;
  }

  const formatDataSizeOptions: FormatDataSizeOptions = {
    fromUnit: getDataSizeUnit(from),
    locale: locale,
    precision: getPrecision(precision),
    toUnit: getDataSizeUnit(to),
  };

  let result;

  try {
    result = formatDataSizeToString(value, formatDataSizeOptions);
  } catch (error) {
    process.stderr.write(`${String(error)}\n`);
    process.exitCode = 1;
  }

  if (result) {
    process.stdout.write(`${result}\n`);
  } else {
    process.exitCode = 1;
  }
})();
