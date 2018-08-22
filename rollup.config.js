import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import sourceMaps from 'rollup-plugin-sourcemaps'
const pkg = require('./package.json')
const camelCase = require('lodash.camelcase')

const libraryName = 'sfdx-js'
const baseOutput = {
  exports: 'named',
  sourcemap: true,
  globals: {
    'child_process': 'child_process',
    'underscore': '_',
    'fs-extra': 'fs-extra',
    'path': 'path',
    'moment': 'moment',
    'reflect-metadata': 'reflect-metadata'
  }
};

export default {
  input: `compiled/${libraryName}.js`,
  output: [
    { ...baseOutput, file: pkg.main, name: camelCase(libraryName), format: 'umd' },
    { ...baseOutput, file: pkg.module, format: 'cjs' }
  ],
  // To make "this is undefined" warning shut up.
  context: 'window',
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: ['child_process', 'reflect-metadata', 'underscore', 'fs-extra', 'path', 'moment'],
  plugins: [
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),
    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    // https://github.com/rollup/rollup-plugin-node-resolve#usage
    resolve({
      browser: false,
      jail: '/src'
    }),
    // Resolve source maps to the original source
    sourceMaps()
  ]
}
