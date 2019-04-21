import test from 'ava';
import toSemver from '.';

test('main', t => {
	const versions = [
		'v1.3.16',
		'v1.7.0',
		'v1.6.9',
		'v1.6.8',
		'v1.3.15',
		'v1.6.7'
	];

	const expected = [
		'1.7.0',
		'1.6.9',
		'1.6.8',
		'1.6.7',
		'1.3.16',
		'1.3.15'
	];

	t.deepEqual(toSemver(versions), expected);
});

test('no versions', t => {
	t.deepEqual(toSemver(['foo', 'bar']), []);
});

test('handles prerelease versions', t => {
	const versions = [
		'1.1.3',
		'1.2.3-alpha.3',
		'1.2.0',
		'1.0.0'
	];

	t.deepEqual(toSemver(versions), [
		'1.2.3-alpha.3',
		'1.2.0',
		'1.1.3',
		'1.0.0'
	]);

	t.deepEqual(toSemver(versions, {includePrereleases: false}), [
		'1.2.0',
		'1.1.3',
		'1.0.0'
	]);
});

test('handles version cleaning', t => {
	const versions = [
		'v1.3.16',
		'v1.6.8',
		'v1.6.7'
	];

	t.deepEqual(toSemver(versions), [
		'1.6.8',
		'1.6.7',
		'1.3.16'
	]);

	t.deepEqual(toSemver(versions, {clean: false}), [
		'v1.6.8',
		'v1.6.7',
		'v1.3.16'
	]);
});
