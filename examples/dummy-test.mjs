import { test } from '../src/test.mjs'
import { equals } from '../src/assertions.mjs'

test('uno', () => {
    equals(1, 1)
})

test('dos', () => {
    equals(1, 2)
})
