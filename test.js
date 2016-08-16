import test from 'ava';
import isXfce from './';

test('is-xfce', t => {
	return isXfce().then(data => {
		t.false(data);
	});
});
