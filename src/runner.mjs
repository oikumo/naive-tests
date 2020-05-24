import { findFilesInDirectories } from './utils.mjs'
import { results, cleanResults } from './test.mjs'

export const runTests = async (testPath, cb) => {
    cleanResults()
    const files = findFilesInDirectories(new Set([testPath]))

    const promises = []
    files.forEach((file) => {
        promises.push(import(file))
    })

    try {
        await Promise.all(promises)
    }
    catch (err) {
        cb(err)
        return
    }

    cb(null, results)
}



