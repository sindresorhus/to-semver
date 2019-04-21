declare namespace toSemver {
	interface Options {
		/**
		Include prereleases, like `1.2.3-alpha.3`.

		@default true
		*/
		readonly includePrereleases?: boolean;

		/**
		Clean versions. For example `v1.3.0` → `1.3.0`.

		@default true
		*/
		readonly clean?: boolean;
	}
}

/**
Get an array of valid, sorted, and cleaned [semver](https://semver.org/) versions from an array of strings.

@example
```
import toSemver = require('to-semver');

toSemver([
	'v1.3.16',
	'v1.7.0',
	'test',
	'v1.6.9'
]);
// [
// 	'1.7.0',
// 	'1.6.9'
// 	'1.3.16'
// ]
```
*/
declare function toSemver(
	versions: readonly string[],
	options?: toSemver.Options
): string[];

export = toSemver;
