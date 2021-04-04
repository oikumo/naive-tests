import { areNotNull, areNotUndefinedOrNull, areNull, areUndefined } from "../../src/assertions/assert-nulls.js";
import { shouldFail } from "../../src/utils/utils.js";

export function assertNullsTest() {
    areNull(null);
    areNotNull(1);
    areUndefined(undefined);
    areNotUndefinedOrNull(1);

    shouldFail(areNull, [1]);
    shouldFail(areNotNull, [null]);
    shouldFail(areUndefined, 1);
    shouldFail(areNotUndefinedOrNull, null);
    shouldFail(areNotUndefinedOrNull, undefined);
}