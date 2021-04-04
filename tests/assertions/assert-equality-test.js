import { equals, notEquals, objAreEquals, objAreNotEquals } from "../../src/assertions/assert-equality.js";
import { shouldFail } from "../../src/utils/utils.js";

export function assertEqualityTest() {
    equals(1, 1);
    equals(2, 2);
    notEquals(1, 2);
    shouldFail(equals, [1, 0]);
    shouldFail(notEquals, [0, 0]);
    objAreEquals({ x: 3, y: 4 }, { x: 3, y: 4 });
    objAreNotEquals({ x: 1, c: '22' }, { x: 2 });
    shouldFail(objAreEquals, [{ www: '22' }, { x: 3, y: 4 }]);
    shouldFail(objAreEquals, [null, { x: 3, y: 4 }]);
    shouldFail(objAreNotEquals, [{ x: 1, y: 3 }, { x: 1, y: 3 }]);
}