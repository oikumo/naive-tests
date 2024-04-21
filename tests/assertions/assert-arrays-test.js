import { equalsArrayElements, sameArrayElementsOnly } from "../../src/assertions/assert-arrays.js";
import { shouldFail } from "../../src/utils/utils.js";

export function assertArrayTest() {
    equalsArrayElements(new Uint32Array(4), new Uint32Array(4));
    equalsArrayElements([1, 2, 3], [1, 2, 3]);
    sameArrayElementsOnly([1, 1, 1, 1], new Uint32Array([1, 1, 1, 1]));
    sameArrayElementsOnly(new Uint32Array([1, 1, 1, 1]), [1, 1, 1, 1]);
    shouldFail(equalsArrayElements, [new Uint32Array(4), new Uint16Array(4)]);
    shouldFail(equalsArrayElements, [[2, 's'], new Uint16Array(4)]);
    shouldFail(equalsArrayElements, [undefined, null]);
    shouldFail(sameArrayElementsOnly, [[1, 1, 1, 1], new Uint32Array([1, 1, 1, 2])]);
}
