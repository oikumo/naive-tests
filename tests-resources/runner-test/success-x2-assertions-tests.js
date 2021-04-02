import { test, assertions } from '../../index.js';
const { equals, notEquals, objAreEquals, objAreNotEquals,
    areNull, areNotNull, areUndefined, areNotUndefinedOrNull,
    sameArrayElements, sameArrayElementsOnly, noThrowsException, throwsException } = assertions;

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

    noThrowsException(() => { })
    throwsException(() => { throw Error() })

    sameArrayElements(new Uint32Array(4), new Uint32Array(4))
    sameArrayElements([1, 2, 3], [1, 2, 3])

    sameArrayElementsOnly([1, 1, 1, 1], new Uint32Array([1, 1, 1, 1]))
    sameArrayElementsOnly(new Uint32Array([1, 1, 1, 1]), [1, 1, 1, 1])
});

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

    shouldFail(() => {
        sameArrayElements(new Uint32Array(4), new Uint16Array(4))
    })

    shouldFail(() => {
        sameArrayElements([2, 's'], new Uint16Array(4))
    })

    shouldFail(() => {
        sameArrayElements(undefined, null)
    })

    shouldFail(() => {
        noThrowsException(() => {
            throw Error('an error')
        })
    })

    shouldFail(() => {
        throwsException(() => {
        })
    })

    shouldFail(() => {
        const arr = new Uint32Array([1, 1, 1, 2])
        sameArrayElementsOnly([1, 1, 1, 1], arr)
    })

    shouldFail(() => {
        const arr = new Uint32Array([1, 1, 1, 2])
        sameArrayElementsOnly(arr, [1, 1, 1, 1])
    })

    shouldFail(() => {
        const arr = new Uint32Array([1, 1, 1, 2])
        sameArrayElementsOnly(arr, null)
    })

    shouldFail(() => {
        sameArrayElementsOnly('s', undefined)
    })
});