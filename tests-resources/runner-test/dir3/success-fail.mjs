import { test, assertions } from '../../../index.mjs'
const { equals, notEquals } = assertions

test('success test', () => {
    equals(1, 1, 'success!')
})

test('failed test', () => {
    notEquals(1, 1, 'fail after pass!')
})
