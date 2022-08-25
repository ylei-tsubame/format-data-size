import { round } from '../src/lib';

describe(`unit ${typeof round} ${round.name}`, () => {
  it('rounds to nearest integer correctly', () => {
    expect.assertions(7);

    // Round 0.123, expect 0
    expect(round({ precision: 3, value: 123n })).toStrictEqual({
      precision: 0,
      value: 0n,
    });

    // Round 0.999, expect 1
    expect(round({ precision: 3, value: 999n })).toStrictEqual({
      precision: 0,
      value: 1n,
    });

    // Round 9.87, expect 10
    expect(round({ precision: 2, value: 987n })).toStrictEqual({
      precision: 0,
      value: 10n,
    });

    // Round 1592.4584, expect 1592
    expect(round({ precision: 4, value: 15924584n })).toStrictEqual({
      precision: 0,
      value: 1592n,
    });

    // Round 9999.999, expect 10000
    expect(round({ precision: 3, value: 9999999n })).toStrictEqual({
      precision: 0,
      value: 10000n,
    });

    // Round 19.9, expect 20
    expect(round({ precision: 1, value: 199n })).toStrictEqual({
      precision: 0,
      value: 20n,
    });

    // Round 0.0006, expect 0
    expect(round({ precision: 4, value: 6n })).toStrictEqual({
      precision: 0,
      value: 0n,
    });
  });

  it('rounds to nearest 1/10 correctly', () => {
    expect.assertions(4);

    const roundOptions = { toPrecision: 1 };

    // Round 12.34, expect 12.3
    expect(round({ precision: 2, value: 1234n }, roundOptions)).toStrictEqual({
      precision: 1,
      value: 123n,
    });

    // Round 19.999, expect 20.0
    expect(round({ precision: 3, value: 19999n }, roundOptions)).toStrictEqual({
      precision: 1,
      value: 200n,
    });

    // Round 9.456, expect 9.5
    expect(round({ precision: 3, value: 9456n }, roundOptions)).toStrictEqual({
      precision: 1,
      value: 95n,
    });

    // Round 999.999, expect 1000.0
    expect(round({ precision: 3, value: 999999n }, roundOptions)).toStrictEqual(
      { precision: 1, value: 10000n }
    );
  });

  it('rounds to nearest 1/1000 correctly', () => {
    expect.assertions(4);

    const roundOptions = { toPrecision: 3 };

    // Round 12.34, expect 12.340
    expect(round({ precision: 2, value: 1234n }, roundOptions)).toStrictEqual({
      precision: 3,
      value: 12340n,
    });

    // Round 9999.9999, expect 10000.000
    expect(
      round({ precision: 4, value: 99999999n }, roundOptions)
    ).toStrictEqual({
      precision: 3,
      value: 10000000n,
    });

    // Round 0.456, expect 0.456
    expect(round({ precision: 3, value: 456n }, roundOptions)).toStrictEqual({
      precision: 3,
      value: 456n,
    });

    // Round 2.876543, expect 2.877
    expect(
      round({ precision: 6, value: 2876543n }, roundOptions)
    ).toStrictEqual({
      precision: 3,
      value: 2877n,
    });
  });
});
