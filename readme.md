# to-semver [![Build Status](https://travis-ci.org/sindresorhus/to-semver.svg?branch=master)](https://travis-ci.org/sindresorhus/to-semver)

> Get an array of valid, sorted, and cleaned [semver](http://semver.org) versions from an array of strings

Can be useful when you have an unsorted list of versions, like git tags, and want to use them as semver versions.


## Install

```
$ npm install to-semver
```


## Usage

```js
const toSemver = require('to-semver');

toSemver([
	'v1.3.16',
	'v1.7.0',
	'test',
	'v1.6.9'
]);
/*
[
	'1.7.0',
	'1.6.9'
	'1.3.16'
]
*/
```


## API

### toSemver(versions, [options])

#### versions

Type: `string[]`

#### options

Type: `Object`

##### includePrereleases

Type: `boolean`<br>
Default: `true`

Include prereleases, like `1.2.3-alpha.3`.

##### clean

Type: `boolean`<br>
Default: `true`

Clean versions. For example `v1.3.0` → `1.3.0`.


## Related

- [latest-semver](https://github.com/sindresorhus/latest-semver) - Get the latest stable semver version from an array of versions
- [semver-regex](https://github.com/sindresorhus/semver-regex) - Regular expression for matching semver versions
- [semver-diff](https://github.com/sindresorhus/semver-diff) - Get the diff type of two semver versions: `0.0.1` `0.0.2` → `patch`
- [semver-truncate](https://github.com/sindresorhus/semver-truncate) - Truncate a semver version: `1.2.3` → `1.2.0`


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
