import semver from 'semver';
import cleanSemver from 'clean-semver';

export default function toSemver(versions, options = {}) {
	const {
		includePrereleases = true,
		clean = true
	} = options;

	let sortedVersions = versions
		.map(version => version.trim())
		.map(version => [version, cleanSemver(version)])
		.filter(version => version[1])
		.sort((a, b) => semver.rcompare(a[1], b[1]));

	if (!includePrereleases) {
		sortedVersions = sortedVersions.filter(version => semver.prerelease(version[1]) === null);
	}

	if (clean) {
		return sortedVersions.map(version => version[1]);
	}

	return sortedVersions.map(([version]) => version);
}
