import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
// import { terser } from 'rollup-plugin-terser';
import alias from '@rollup/plugin-alias';
import image from 'rollup-plugin-img';

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
          },
          {
            find: '@/stories',
            replacement: path.resolve(projectRootDir, './src/stories')
          },
          {
            find: '@/images',
            replacement: path.resolve(projectRootDir, './src/assets/images')
          },
          {
            find: '@/helpers',
            replacement: path.resolve(projectRootDir, './src/helpers')
          },
          {
            find: '@/hooks',
            replacement: path.resolve(projectRootDir, './src/hooks')
          },
          {
            find: '@/constants',
            replacement: path.resolve(projectRootDir, './src/constants')
          },
          {
            find: '@/containers',
            replacement: path.resolve(projectRootDir, './src/containers')
          },
          {
            find: '@/services',
            replacement: path.resolve(projectRootDir, './src/services')
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
      image({
        limit: 10000
      })
    ],
    external: ['styled-components']
  }
];
