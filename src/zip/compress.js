import {createWriteStream, createReadStream} from 'fs';
import {createGzip} from 'zlib';

const compress = async () => {
    const source = createReadStream('./files/fileToCompress.txt');
    const destination = createWriteStream('./files/archive.gz');

    source.pipe(createGzip()).pipe(destination);
};

await compress();
