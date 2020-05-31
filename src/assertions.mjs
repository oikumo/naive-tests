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