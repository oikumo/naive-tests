import { raiseError } from "../../src/assertions/assert-errors.js";

export function assertErrorsTest() {
    raiseError(() => { throw new Error(); }, null);
}