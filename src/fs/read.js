import {existsSync, readFile} from 'node:fs';

const read = async () => {
    // async fs.exists is deprecated, so better use a sync fs.existsSync
    if (!existsSync('./files/fileToRead.txt')) {
        throw Error('FS operation failed');
    }

    readFile('./files/fileToRead.txt', {encoding: "utf8"}, (err, data) => {
        if (err) throw err;

        console.log(data)
    })
};

await read();
