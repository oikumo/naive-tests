import { notNull, areNotUndefinedOrNull, isNull, areUndefined } from "../../src/assertions/assert-nulls.js";
import { shouldFail } from "../../src/utils/utils.js";

export function assertNullsTest() {
    isNull(null);
    notNull(null);
    areUndefined(undefined);
    areNotUndefinedOrNull(1);

    shouldFail(isNull, [1]);
    shouldFail(notNull, [null]);
    shouldFail(areUndefined, 1);
    shouldFail(areNotUndefinedOrNull, null);
    shouldFail(areNotUndefinedOrNull, undefined);
}