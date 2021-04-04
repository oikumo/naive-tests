import { shouldFail } from "../../src/utils/utils.js";

function shouldFailNoExceptionTest() {
    try {
        shouldFail(null);
    } catch (err) {
        return;
    }
    throw new Error();
}

export function utilsTest() {
    shouldFail(() => { throw new Error(); }, null);
    shouldFailNoExceptionTest();
}
