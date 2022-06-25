import { ConversionTable } from './types';

import { createConversionTable } from './lib';

const conversionTable: Readonly<ConversionTable> = createConversionTable();

// Purpose of this module is to generate the conversion table before runtime.
// The generated result should be used as-is in the corresponding constant.
//
// Suggested usage is to use 'npm run ctable'.
//
// eslint-disable-next-line no-console
console.dir(conversionTable, { depth: null });
