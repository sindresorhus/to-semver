import {expectType} from 'tsd';
import toSemver from './index.js';

expectType<string[]>(toSemver(['v1.3.16', 'v1.7.0']));
expectType<string[]>(
	toSemver(['v1.3.16', 'v1.7.0'], {includePrereleases: false})
);
expectType<string[]>(toSemver(['v1.3.16', 'v1.7.0'], {clean: false}));
