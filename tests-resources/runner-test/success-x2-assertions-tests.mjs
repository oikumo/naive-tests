import {
    test, equals, notEquals, objAreEquals, objAreNotEquals,
    areNull, areNotNull, areUndefined, areNotUndefinedOrNull
} from '../../index.mjs'

test('success assertion test', () => {
    equals(1, 1)
    notEquals(1, 2)
    areNull(null)
    areNotNull(0)
    areUndefined(undefined)
    areNotUndefinedOrNull(1)

    const actual = { x: 3, y: 4 }
    const expected = { x: 3, y: 4 }
    objAreEquals(actual, expected)

    const o1 = { x: 1, c: '22' }
    const o2 = { x: 2 }
    objAreNotEquals(o1, o2)
})

const shouldFail = (f) => {
    let errExpected = null
    try {
        f()
    } catch (err) {
        errExpected = err
    }
    if (errExpected === null)
        throw new Error('test fail')
}

test('success not assertion test', () => {
    shouldFail(() => equals(2, 1))
    shouldFail(() => notEquals(1, 1))
    shouldFail(() => areNull(2))
    shouldFail(() => areNotNull(null))
    shouldFail(() => areUndefined(1))
    shouldFail(() => areNotUndefinedOrNull(null))
    shouldFail(() => areNotUndefinedOrNull(undefined))

    shouldFail(() => {
        const actual = { www: '22' }
        const expected = { x: 3, y: 4 }
        objAreEquals(actual, expected)
    })

    shouldFail(() => {
        const actual = null
        const expected = { x: 3, y: 4 }
        objAreEquals(actual, expected)
    })

    shouldFail(() => {
        const o1 = { x: 1, y: 3 }
        const o2 = { x: 1, y: 3 }
        objAreNotEquals(o1, o2)
    })
})