import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import alias from '@rollup/plugin-alias';

const path = require('path');

const projectRootDir = path.resolve(__dirname);
const customResolver = resolve({
  extensions: ['.mjs', '.js', '.jsx', '.json', '.sass', '.scss']
});

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs'
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named'
      }
    ],
    plugins: [
      alias({
        entries: [
          {
            find: '@/components',
            replacement: path.resolve(projectRootDir, './src/components')
          }
        ],
        customResolver
      }),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/preset-react']
      }),
      external(),
      resolve({
        extensions: ['.js', '.jsx']
      }),
      terser()
    ]
  }
];
