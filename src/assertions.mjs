export const sameArrayElements = (expected, actual, errorMessage) => {
    if (Object.getPrototypeOf(expected) !== Object.getPrototypeOf(actual)) {
        let info = ''
        if (errorMessage) info += `${errorMessage} \n`
        info += `prototypes doesn't match. expected proto: ${Object.getPrototypeOf(expected)} actual proto: ${Object.getPrototypeOf(actual)} `
        throw new Error(info)
    }

    const differences = []
    if (expected.length !== actual.length) {
        let info = ''
        if (errorMessage) info += `${errorMessage} \n`
        info += `length doesn't match. expected length: ${expected.length} actual: ${actual.length} `
        throw new Error(info)
    }
    const actualLength = actual.length
    for (let i = 0; i < actualLength; i++) {
        if (expected[i] !== actual[i]) {
            differences.push({ index: i, expected: expected[i], actual: actual[i] })
        }
    }

    if (differences.length > 0) {
        let info = ''
        if (errorMessage) info += `${errorMessage} \n`
        info += `arrays doesn't match`
        differences.forEach((diff) => {
            info += `\nelement index: ${diff.index} expected: ${diff.expected} actual: ${diff.actual}`
        })
        throw new Error(info)
    }
}

export const equals = (expected, actual, errorMessage) => {
    const equal = expected === actual
    if (!equal) {
        let info = ''
        if (errorMessage) info += `${errorMessage} \n`
        info += `expected: ${expected} actual: ${actual} `
        throw Error(info)
    }
}

export const notEquals = (expected, actual, errorMessage) => {
    const notequal = expected !== actual
    if (!notequal) {
        let info = ''
        if (errorMessage) info += `${errorMessage} \n`
        info += `expected: ${expected} actual: ${actual} `
        throw Error(info)
    }
}

export const objAreEquals = (expected, actual, errorMessage) => {
    const equal = JSON.stringify(expected) === JSON.stringify(actual)
    if (!equal) {
        let info = ''
        if (errorMessage) info += `${errorMessage} \n`
        info += `expected: ${JSON.stringify(expected)} actual: ${JSON.stringify(actual)} `
        throw Error(info)
    }
}

export const objAreNotEquals = (expected, actual, errorMessage) => {
    const equal = JSON.stringify(expected) === JSON.stringify(actual)
    if (equal) {
        let info = ''
        if (errorMessage) info += `${errorMessage} \n`
        info += `expected: ${expected} actual: ${actual} `
        throw Error(info)
    }
}

export const areNull = (actual, errorMessage) => {
    if (actual !== null) {
        let info = ''
        if (errorMessage) info += `${errorMessage} \n`
        info += `is not null, actual: ${actual}`
        throw Error(info)
    }
}

export const areNotNull = (actual, errorMessage) => {
    if (actual === null) {
        let info = ''
        if (errorMessage) info += `${errorMessage} \n`
        info += `is null, actual: ${actual}`
        throw Error(info)
    }
}

export const areUndefined = (actual, errorMessage) => {
    if (actual !== undefined) {
        let info = ''
        if (errorMessage) info += `${errorMessage} \n`
        info += `it is not undefined, actual: ${actual}`
        throw Error(info)
    }
}

export const areNotUndefinedOrNull = (actual, errorMessage) => {
    if (actual === undefined || actual === null) {
        let info = ''
        if (errorMessage) info += `${errorMessage} \n`
        info += `should not be undefined or null, actual: ${actual}`
        throw Error(info)
    }
}