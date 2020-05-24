import { runTests } from '../src/runner.mjs'
import path from 'path'

export const run = function () {
    const testsDir = path.join(process.cwd(), 'tests-resources/runner-test')
    runTests(testsDir, (err, results) => {
        if (err)
            throw new Error('test runner import fails')

        const summary = {
            pass: 0,
            fails: 0
        }

        results.forEach((result) => {
            if (result.errors.length > 0)
                summary.fails++
            else
                summary.pass++
        })

        if (summary.fails != 2 || summary.pass != 2)
            throw new Error('test runner results error')
    })
}