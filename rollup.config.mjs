import { babel } from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import ts from 'rollup-plugin-ts';

const createConfig = (babelEnvName, format, name = 'formatDataSize') => {
  const isBrowser = babelEnvName === 'browser';
  const isNodejs = babelEnvName === 'nodejs';

  let outputFileExtension = '.js';

  if (isNodejs) {
    outputFileExtension = format === 'esm' ? '.mjs' : '.cjs';
  }

  return {
    input: 'src/index.ts',
    output: {
      file: `dist/${babelEnvName}-${format}/index${outputFileExtension}`,
      format,
      name,
    },
    plugins: [
      nodeResolve({
        browser: isBrowser,
        extensions: ['.ts'],
      }),
      babel({ envName: babelEnvName, extensions: ['.ts'] }),
    ],
  };
};

export default [
  createConfig('browser', 'esm'),
  createConfig('browser', 'umd'),
  createConfig('nodejs', 'esm'),
  createConfig('nodejs', 'cjs'),
  {
    input: 'src/index.ts',
    output: {
      file: 'types/index.d.ts',
    },
    plugins: [ts({ tsconfig: './tsconfig.types.json' })],
  },
];
