'use strict';
const semver = require('semver');
const cleanSemver = require('clean-semver');

module.exports = (versions, options) => {
	options = {
		includePrereleases: true,
		clean: true,
		...options
	};

	let sortedVersions = versions
		.map(version => version.trim())
		.map(version => [version, cleanSemver(version)])
		.filter(version => version[1])
		.sort((a, b) => semver.rcompare(a[1], b[1]));

	if (!options.includePrereleases) {
		sortedVersions = sortedVersions.filter(version => semver.prerelease(version[1]) === null);
	}

	if (options.clean) {
		return sortedVersions.map(version => version[1]);
	}

	return sortedVersions.map(([version]) => version);
};
