import { existsSync, writeFile } from 'node:fs';

const create = async () => {
    const content = 'I am fresh and young';

    // async fs.exists is deprecated, so better use a sync fs.existsSync
    if (existsSync('./files/fresh.txt')) {
        throw Error('FS operation failed');
    }

    writeFile('./files/fresh.txt', content, err => {
        if (err) throw err;
    })
};

await create();
