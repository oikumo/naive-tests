import { test, assert } from '../../../../index.js';

test('failing test', () => {
    assert.equals(1, 2, 'fail');
});