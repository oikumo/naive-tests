export var results = [];
export const cleanResults = () => results.length = 0;

class Result {
    constructor(info, time, errors) {
        this.info = info;
        this.time = time;
        this.errors = errors;
    }
}

export const test = function (description, func) {
    const start = Date.now();
    const errors = [];

    try {
        func();
    }
    catch (err) {
        errors.push(err);
    }

    const time = `${(Date.now() - start) / 1000} sec`;
    results.push(new Result(description, time, errors));
};