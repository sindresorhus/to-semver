'use strict';
const semver = require('semver');

module.exports = (versions, options) => {
	options = Object.assign({
		includePrereleases: true,
		clean: true
	}, options);

	let sortedVersions = versions.filter(x => semver.valid(x)).sort(semver.rcompare);

	if (!options.includePrereleases) {
		sortedVersions = sortedVersions.filter(x => semver.prerelease(x) === null);
	}

	if (options.clean) {
		sortedVersions = sortedVersions.map(x => semver.clean(x));
	}

	return sortedVersions;
};
