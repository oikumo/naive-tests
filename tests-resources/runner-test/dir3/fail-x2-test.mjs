import { test, equals, notEquals } from '../../../index.mjs'

test('failed test', () => {
    equals(1, 2, 'fail')
    equals(1, 2, 'fail')
    equals(1, 2, 'fail')
    equals(1, 2, 'fail')
    equals(1, 2, 'fail')
    notEquals(1, 1, 'fail!!!')
})

test('failed test', () => {
    equals(3, 2, 'fail')
})