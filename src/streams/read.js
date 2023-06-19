import {createReadStream} from 'fs';

const read = async () => {
    const stream = createReadStream('./files/fileToRead.txt', {encoding: 'utf8'})
    stream.on('data', (chunk) => {
        process.stdout.write(chunk)
    })
};

await read();
