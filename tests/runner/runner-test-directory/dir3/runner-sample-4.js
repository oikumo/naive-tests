import { test, assert } from '../../../../index.js';

test('fail test', () => {
    assert.equals(1, 2, 'fail');
});

test('fail test', () => {
    assert.equals(3, 2, 'fail');
});