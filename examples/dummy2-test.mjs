import { test } from '../src/test.mjs'
import { equals } from '../src/assertions.mjs'

test('tres', () => {
    equals(1, 1)
    equals(1, 1)
    equals(2, 1)
    equals(2, 1)
})
