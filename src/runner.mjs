import * as fs from 'fs'
import path from 'path'
import { results } from './test.mjs'

export const runTests = function (testFolder) {
    results.len = 0

    const dirs = fs.readdirSync(testFolder)
    const promises = []

    dirs.forEach((dir) => {
        const file = path.join(testFolder, dir)
        promises.push(import(file))
    })

    Promise.all(promises).then(() => {
        console.log(results)
    })
}



