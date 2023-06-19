import {existsSync, readdir} from 'node:fs';

const list = async () => {
    // async fs.exists is deprecated, so better use a sync fs.existsSync
    if (!existsSync('./files')) {
        throw Error('FS operation failed');
    }

    readdir('./files', (err, files) => {
        if (err) throw err;

        files.forEach(e => {
            console.log(e)
        })
    })
};

await list();
