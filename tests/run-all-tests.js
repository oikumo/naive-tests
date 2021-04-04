import { assertArrayTest } from './assertions/assert-arrays-test.js';
import { assertEqualityTest } from './assertions/assert-equality-test.js';
import { assertErrorsTest } from './assertions/assert-errors-test.js';
import { assertNullsTest } from './assertions/assert-nulls-tests.js';
import { runnerTest } from './runner/runner-test.js';
import { utilsTest } from './utils/utils-test.js';

utilsTest();
runnerTest();
assertArrayTest();
assertEqualityTest();
assertErrorsTest();
assertNullsTest();