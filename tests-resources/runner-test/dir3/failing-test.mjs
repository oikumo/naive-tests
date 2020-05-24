import { test, equals, notEquals } from '../../../index.mjs'

test('failing test', () => {
    equals(1, 2, 'fail')
    notEquals(1, 1, 'fail!!!')
})