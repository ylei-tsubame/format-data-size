import { round } from '../src/lib';

describe(`unit ${typeof round} ${round.name}`, () => {
  it('rounds to nearest integer correctly', () => {
    expect.assertions(7);

    // Round 0.123, expect 0
    expect(round('123', 0)).toStrictEqual({
      stringInt: '0',
      fractionIndex: 1,
    });

    // Round 0.999, expect 1
    expect(round('999', 0)).toStrictEqual({
      stringInt: '1',
      fractionIndex: 1,
    });

    // Round 9.87, expect 10
    expect(round('987', 1)).toStrictEqual({
      stringInt: '10',
      fractionIndex: 2,
    });

    // Round 1592.4584, expect 1592
    expect(round('15924584', 4)).toStrictEqual({
      stringInt: '1592',
      fractionIndex: 4,
    });

    // Round 9999.999, expect 10000
    expect(round('9999999', 4)).toStrictEqual({
      stringInt: '10000',
      fractionIndex: 5,
    });

    // Round 19.9, expect 20
    expect(round('199', 2)).toStrictEqual({
      stringInt: '20',
      fractionIndex: 2,
    });

    // Round 0.0006, expect 0
    expect(round('00006', 1)).toStrictEqual({
      stringInt: '0',
      fractionIndex: 1,
    });
  });

  it('rounds to nearest 1/10 correctly', () => {
    expect.assertions(4);

    const roundOptions = { precision: 1 };

    // Round 12.34, expect 12.3
    expect(round('1234', 2, roundOptions)).toStrictEqual({
      stringInt: '123',
      fractionIndex: 2,
    });

    // Round 19.999, expect 20.0
    expect(round('19999', 2, roundOptions)).toStrictEqual({
      stringInt: '200',
      fractionIndex: 2,
    });

    // Round 9.456, expect 9.5
    expect(round('9456', 1, roundOptions)).toStrictEqual({
      stringInt: '95',
      fractionIndex: 1,
    });

    // Round 999.999, expect 1000.0
    expect(round('999999', 3, roundOptions)).toStrictEqual({
      stringInt: '10000',
      fractionIndex: 4,
    });
  });

  it('rounds to nearest 1/1000 correctly', () => {
    expect.assertions(4);

    const roundOptions = { precision: 3 };

    // Round 12.34, expect 12.340
    expect(round('1234', 2, roundOptions)).toStrictEqual({
      stringInt: '12340',
      fractionIndex: 2,
    });

    // Round 9999.9999, expect 10000.000
    expect(round('99999999', 4, roundOptions)).toStrictEqual({
      stringInt: '10000000',
      fractionIndex: 5,
    });

    // Round 0.456, expect 0.456
    expect(round('456', 0, roundOptions)).toStrictEqual({
      stringInt: '456',
      fractionIndex: 0,
    });

    // Round 2.876543, expect 2.877
    expect(round('2876543', 1, roundOptions)).toStrictEqual({
      stringInt: '2877',
      fractionIndex: 1,
    });
  });
});
