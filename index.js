'use strict';
const semver = require('semver');

module.exports = (versions, options) => {
	options = Object.assign({
		includePrereleases: true
	}, options);

	let sortedVersions = versions.filter(x => semver.valid(x)).sort(semver.rcompare);

	if (!options.includePrereleases) {
		sortedVersions = sortedVersions.filter(x => semver.prerelease(x) === null);
	}

	return sortedVersions.map(x => semver.clean(x));
};
