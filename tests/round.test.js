import { round } from '../src/lib';

import { ctf } from './ctf';

describe(`unit ${typeof round} ${round.name}`, () => {
  it(
    'rounds to nearest integer correctly',
    ctf(() => {
      // Round 0.123, expect 0
      let { stringInt, fractionIndex } = round('123', 0);
      expect(stringInt).toBe('0');
      expect(fractionIndex).toBe(1);

      // Round 0.999, expect 1
      ({ stringInt, fractionIndex } = round('999', 0));
      expect(stringInt).toBe('1');
      expect(fractionIndex).toBe(1);

      // Round 9.87, expect 10
      ({ stringInt, fractionIndex } = round('987', 1));
      expect(stringInt).toBe('10');
      expect(fractionIndex).toBe(2);

      // Round 1592.4584, expect 1592
      ({ stringInt, fractionIndex } = round('15924584', 4));
      expect(stringInt).toBe('1592');
      expect(fractionIndex).toBe(4);

      // Round 9999.999, expect 10000
      ({ stringInt, fractionIndex } = round('9999999', 4));
      expect(stringInt).toBe('10000');
      expect(fractionIndex).toBe(5);

      // Round 19.9, expect 20
      ({ stringInt, fractionIndex } = round('199', 2));
      expect(stringInt).toBe('20');
      expect(fractionIndex).toBe(2);

      // Round 0.0006, expect 0
      ({ stringInt, fractionIndex } = round('00006', 1));
      expect(stringInt).toBe('0');
      expect(fractionIndex).toBe(1);
    }, 14)
  );

  it(
    'rounds to nearest 1/10 correctly',
    ctf(() => {
      const roundOptions = { precision: 1 };

      // Round 12.34, expect 12.3
      let { stringInt, fractionIndex } = round('1234', 2, roundOptions);
      expect(stringInt).toBe('123');
      expect(fractionIndex).toBe(2);

      // Round 19.999, expect 20.0
      ({ stringInt, fractionIndex } = round('19999', 2, roundOptions));
      expect(stringInt).toBe('200');
      expect(fractionIndex).toBe(2);

      // Round 9.456, expect 9.5
      ({ stringInt, fractionIndex } = round('9456', 1, roundOptions));
      expect(stringInt).toBe('95');
      expect(fractionIndex).toBe(1);

      // Round 999.999, expect 1000.0
      ({ stringInt, fractionIndex } = round('999999', 3, roundOptions));
      expect(stringInt).toBe('10000');
      expect(fractionIndex).toBe(4);
    }, 8)
  );

  it(
    'rounds to nearest 1/1000 correctly',
    ctf(() => {
      const roundOptions = { precision: 3 };

      // Round 12.34, expect 12.340
      let { stringInt, fractionIndex } = round('1234', 2, roundOptions);
      expect(stringInt).toBe('12340');
      expect(fractionIndex).toBe(2);

      // Round 9999.9999, expect 10000.000
      ({ stringInt, fractionIndex } = round('99999999', 4, roundOptions));
      expect(stringInt).toBe('10000000');
      expect(fractionIndex).toBe(5);

      // Round 0.456, expect 0.456
      ({ stringInt, fractionIndex } = round('456', 0, roundOptions));
      expect(stringInt).toBe('456');
      expect(fractionIndex).toBe(0);

      // Round 2.876543, expect 2.877
      ({ stringInt, fractionIndex } = round('2876543', 1, roundOptions));
      expect(stringInt).toBe('2877');
      expect(fractionIndex).toBe(1);
    }, 8)
  );
});
