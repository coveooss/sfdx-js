# SFDX javascript wrapper.

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Greenkeeper badge](https://badges.greenkeeper.io/coveo/sfdx-js.svg)](https://greenkeeper.io/)
[![Travis](https://img.shields.io/travis/coveo/sfdx-js.svg)](https://travis-ci.org/coveo/sfdx-js)
[![Coveralls](https://img.shields.io/coveralls/coveo/sfdx-js.svg)](https://coveralls.io/github/coveo/sfdx-js)
[![Dev Dependencies](https://david-dm.org/coveo/sfdx-js/dev-status.svg)](https://david-dm.org/coveo/sfdx-js?type=dev)

A typescript compatible javascript wrapper for Salesforce DX cli.

### Usage

TODO

### dev scripts

 - `npm t`: Run test suite
 - `npm start`: Runs `npm run build` in watch mode
 - `npm run test:watch`: Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch)
 - `npm run test:prod`: Run linting and generate coverage
 - `npm run build`: Generage bundles and typings, create docs
 - `npm run lint`: Lints code
 - `npm run commit`: Commit using conventional commit style ([husky](https://github.com/typicode/husky) will tell you to use it if you haven't :wink:)

### Git Hooks

There is already set a `precommit` hook for formatting your code with Prettier :nail_care:

By default, there are 2 disabled git hooks. They're set up when you run the `npm run semantic-release-prepare` script. They make sure:
 - You follow a [conventional commit message](https://github.com/conventional-changelog/conventional-changelog)
 - Your build is not gonna fail in [Travis](https://travis-ci.org) (or your CI server), since it's runned locally before `git push`

This makes more sense in combination with [automatic releases](#automatic-releases)

## Credits

Made with :heart:
