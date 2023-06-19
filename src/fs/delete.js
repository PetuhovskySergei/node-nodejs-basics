import {existsSync, unlink} from 'node:fs';

const remove = async () => {
    // async fs.exists is deprecated, so better use a sync fs.existsSync
    if (!existsSync('./files/fileToRemove.txt')) {
        throw Error('FS operation failed');
    }

    unlink('./files/fileToRemove.txt', err => {
        if (err) throw err;
    })
};

await remove();
