import {existsSync, rename as renameFs} from 'node:fs';

const rename = async () => {
    // async fs.exists is deprecated, so better use a sync fs.existsSync
    if (existsSync('./files/properFilename.md') || !existsSync('./files/wrongFilename.txt')) {
        throw Error('FS operation failed');
    }

    renameFs('./files/wrongFilename.txt', './files/properFilename.md', err => {
        if (err) throw err;
    })
};

await rename();
