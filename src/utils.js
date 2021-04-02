import * as fs from 'fs'
import path from 'path'

const findFilesInDirectories = function (dirsPath) {
    let files = new Set()
    let dirs = dirsPath

    while (dirs.size > 0) {
        let foundSubDirs = new Set()
        for (let dir of dirs) {
            const [subDirs, filesInDir] = scan(dir)
            foundSubDirs = new Set([...foundSubDirs, ...subDirs])
            files = new Set([...files, ...filesInDir])
        }
        dirs = foundSubDirs
    }
    return files
}

const scan = (dir) => {
    const directories = new Set()
    const files = new Set()
    fs.readdirSync(dir).forEach((item) => {
        const itemPath = path.join(dir, item)
        const stats = fs.statSync(itemPath)
        if (stats.isDirectory())
            directories.add(itemPath)
        else
            files.add(itemPath)
    })
    return [directories, files]
}

export {
    findFilesInDirectories,
    scan
}