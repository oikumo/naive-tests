import { test, equals, notEquals } from '../../../index.mjs'

test('success test', () => {
    equals(1, 1, 'success!')
})

test('failed test', () => {
    notEquals(1, 1, 'fail after pass!')
})
