export const equals = (original, expected) => {
    const equal = original === expected
    if (!equal) {
        const info = `original: ${original} expected: ${expected}`
        throw Error(info)
    }
}

export const notEquals = (original, expected) => {
    const notequal = original !== expected
    if (!notequal) {
        const info = `original: ${original} expected: ${expected}`
        throw Error(info)
    }
}