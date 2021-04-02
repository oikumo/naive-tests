import { test, assertions } from '../../../index.js';
const { equals, notEquals } = assertions;

test('success test', () => {
    equals(1, 1, 'success!')
});
