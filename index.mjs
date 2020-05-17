const results = []

function Result(info, pass) {
    this.info = info
    this.pass = pass
}

const assert = function (original, expected, message) {
    const info = `original: ${original} expected: ${expected}`
    const equal = original === expected
    return new Result(info, equal)
}

const test = (f, x, y) => {
    const result = f(x, y)
    results.push(result)
    console.log(result)
}

export const equals = (x, y) => { test(assert, x, y) }
