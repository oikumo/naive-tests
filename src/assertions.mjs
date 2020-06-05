export const sameArrayElements = (expected, actual) => {
    if (Object.getPrototypeOf(expected) !== Object.getPrototypeOf(actual)) {
        const info = `prototypes doesn't match. expected proto: ${Object.getPrototypeOf(expected)} actual proto: ${Object.getPrototypeOf(actual)} `
        throw new Error(info)
    }

    const differences = []
    if (expected.length !== actual.length) {
        const info = `length doesn't match. expected length: ${expected.length} actual: ${actual.length} `
        throw new Error(info)
    }
    const actualLength = actual.length
    for (let i = 0; i < actualLength; i++) {

        if (expected[i] !== actual[i]) {
            differences.push({ index: i, expected: expected[i], actual: actual[i] })
        }
    }

    if (differences.length > 0) {
        const info = `arrays doesn't match`
        differences.forEach((diff) => {
            info += `\nelement index: ${diff.index} expected: ${diff.expected} actual: ${diff.actual}`
        })
        throw new Error(info)
    }
}

export const equals = (expected, actual) => {
    const equal = expected === actual
    if (!equal) {
        const info = `expected: ${expected} actual: ${actual} `
        throw Error(info)
    }
}

export const notEquals = (expected, actual) => {
    const notequal = expected !== actual
    if (!notequal) {
        const info = `expected: ${expected} actual: ${actual} `
        throw Error(info)
    }
}

export const objAreEquals = (expected, actual) => {
    const equal = JSON.stringify(expected) === JSON.stringify(actual)
    if (!equal) {
        const info = `expected: ${JSON.stringify(expected)} actual: ${JSON.stringify(actual)} `
        throw Error(info)
    }
}

export const objAreNotEquals = (expected, actual) => {
    const equal = JSON.stringify(expected) === JSON.stringify(actual)
    if (equal) {
        const info = `expected: ${expected} actual: ${actual} `
        throw Error(info)
    }
}

export const areNull = (actual) => {
    if (actual !== null) {
        const info = `is not null, actual: ${actual}`
        throw Error(info)
    }
}

export const areNotNull = (actual) => {
    if (actual === null) {
        const info = `is null, actual: ${actual}`
        throw Error(info)
    }
}

export const areUndefined = (actual) => {
    if (actual !== undefined) {
        const info = `it is not undefined, actual: ${actual}`
        throw Error(info)
    }
}

export const areNotUndefinedOrNull = (actual) => {
    if (actual === undefined || actual === null) {
        const info = `should not be undefined or null, actual: ${actual}`
        throw Error(info)
    }
}