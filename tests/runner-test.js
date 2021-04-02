import { runTests } from '../src/runner.js'
import path from 'path'

export const runnerTest = function () {
    const testsDir = path.join(process.cwd(), 'tests-resources/runner-test')
    runTests(testsDir, (err, results) => {
        if (err)
            throw new Error(`test runner import fails, err: ${err}`)

        const summary = {
            pass: 0,
            fails: 0
        }

        results.forEach((result) => {
            if (result.errors.length > 0) {
                summary.fails++
            }
            else
                summary.pass++
        })

        const mustSuccess = 3
        const mustFail = 3

        if (summary.fails != mustFail || summary.pass != mustSuccess) {
            console.error('tests with errors')
            process.exit(1)
        }

        console.log('runner-test test pass')
    })
}