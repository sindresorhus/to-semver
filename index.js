'use strict';
const semver = require('semver');

module.exports = (versions, options) => {
	options = {
		includePrereleases: true,
		clean: true,
		...options
	};

	let sortedVersions = versions.filter(version => semver.valid(version)).sort(semver.rcompare);

	if (!options.includePrereleases) {
		sortedVersions = sortedVersions.filter(version => semver.prerelease(version) === null);
	}

	if (options.clean) {
		sortedVersions = sortedVersions.map(version => semver.clean(version));
	}

	return sortedVersions;
};
