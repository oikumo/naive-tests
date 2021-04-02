import { test, assertions } from '../../../index.js';
const { equals, notEquals } = assertions;

test('failing test', () => {
    equals(1, 2, 'fail');
    notEquals(1, 1, 'fail!!!');
});