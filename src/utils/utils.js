import * as fs from 'fs';
import path from 'path';

function isJSFile(filename) {
    if (filename === undefined || filename === null) return false;
    
    const length = filename.length;
    if (filename.endsWith('.mjs') && length > 4) return true;
    if (filename.endsWith('.js') && length > 3) return true;

    return false;
}

export function findFilesInDirectories(dirsPath) {
    let files = new Set();
    let dirs = dirsPath;

    while (dirs.size > 0) {
        let foundSubDirs = new Set();
        for (let dir of dirs) {
            const [subDirs, filesInDir] = scan(dir);
            foundSubDirs = new Set([...foundSubDirs, ...subDirs]);
            files = new Set([...files, ...filesInDir]);
        }
        dirs = foundSubDirs;
    }
    return files;
}

export function scan(dir) {
    const directories = new Set();
    const files = new Set();
    fs.readdirSync(dir).forEach((item) => {
        const itemPath = path.join(dir, item);
        const stats = fs.statSync(itemPath);

        if (stats.isDirectory()) {
            if (!itemPath.startsWith('.'))    
                directories.add(itemPath);
            
        } else if (isJSFile(itemPath)) {
            files.add(itemPath);
        }
    });
    return [directories, files];
}

export function shouldFail(testFunction, params) {
    if (!testFunction || typeof testFunction !== 'function') {
        throw new Error("Function expected");
    }

    let p = params;

    if (p === null) {
        p = [null];
    } else if (p === undefined) {
        p = [undefined];
    } else if (!Array.isArray(p)) {
        p = [p];
    }

    let errExpected = null;
    try {
        testFunction.apply(null, p);
    } catch (err) {
        errExpected = err;
    }
    if (errExpected === null)
        throw new Error('Error expected');
}