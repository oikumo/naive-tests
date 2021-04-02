export var results = []
export const cleanResults = () => results.length = 0

function Result(info, errors = []) {
    this.info = info
    this.errors = errors
}

export const test = function (description, func) {
    try {
        func()
        results.push(new Result(description))
    }
    catch (err) {
        results.push(new Result(description, [err]))
    }
}