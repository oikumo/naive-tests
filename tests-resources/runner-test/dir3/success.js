import { test, assertions } from '../../../index.js';
const { equals } = assertions;

test('success test', () => {
    equals(1, 1, 'success!');
});
