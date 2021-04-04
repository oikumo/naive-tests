import { test } from './src/test.js';
import { runTests } from './src/runner.js';
import * as arrays from './src/assertions/assert-arrays.js';
import * as equality from './src/assertions/assert-equality.js';
import * as errors from './src/assertions/assert-errors.js';
import * as nulls from './src/assertions/assert-nulls.js';

const assert = Object.assign({},
    arrays,
    equality,
    errors,
    nulls
);

export {
    test,
    runTests,
    assert
};