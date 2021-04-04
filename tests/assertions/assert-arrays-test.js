import { sameArrayElements, sameArrayElementsOnly } from "../../src/assertions/assert-arrays.js";
import { shouldFail } from "../../src/utils/utils.js";

export function assertArrayTest() {
    sameArrayElements(new Uint32Array(4), new Uint32Array(4));
    sameArrayElements([1, 2, 3], [1, 2, 3]);
    sameArrayElementsOnly([1, 1, 1, 1], new Uint32Array([1, 1, 1, 1]));
    sameArrayElementsOnly(new Uint32Array([1, 1, 1, 1]), [1, 1, 1, 1]);
    shouldFail(sameArrayElements, [new Uint32Array(4), new Uint16Array(4)]);
    shouldFail(sameArrayElements, [[2, 's'], new Uint16Array(4)]);
    shouldFail(sameArrayElements, [undefined, null]);
    shouldFail(sameArrayElementsOnly, [[1, 1, 1, 1], new Uint32Array([1, 1, 1, 2])]);
}
