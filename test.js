import test from 'ava';
import isXfce from './';

test('is-xfce', async t => {
	t.is(await isXfce(), false);
});
