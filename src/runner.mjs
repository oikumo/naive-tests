import * as fs from 'fs'
import path from 'path'
import { results } from './test.mjs'

export const runTests = function (testPath, cb) {
    results.len = 0

    const dirs = fs.readdirSync(testPath)
    const promises = []

    dirs.forEach((dir) => {
        const file = path.join(testPath, dir)
        promises.push(import(file))
    })

    Promise.all(promises).then(() => {
        cb(null, results)
    }).catch((err) => {
        cb(err)
    })
}



