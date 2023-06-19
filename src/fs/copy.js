import {cp, existsSync} from 'node:fs';

const copy = async () => {
    // async fs.exists is deprecated, so better use a sync fs.existsSync
    if (existsSync('./files_copy')) {
        throw Error('FS operation failed');
    }

    cp('./files', './files_copy', {recursive: true}, err => {
        if (err) throw err;
    })
};

await copy();
