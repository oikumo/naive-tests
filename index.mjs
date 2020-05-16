const results = []

function Result(info, pass) {
    this.info = info
    this.pass = pass
}

const assert = function (original, expected, message) {
    const info = message !== undefined ? message : `original: ${original} expected: ${expected}`
    return new Result(info, false)
}

const test = (f, x, y) => {
    const result = f(x, y)
    results.push(result)
    console.log(result)
}

export const equals = (x, y) => { test(assert, x, y) }
