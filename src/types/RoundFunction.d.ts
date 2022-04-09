type RoundOptions = { precision?: number };

type RoundFunction = (
  stringInt: string,
  postDecimalIndex: number,
  options?: RoundOptions,
) => string;
