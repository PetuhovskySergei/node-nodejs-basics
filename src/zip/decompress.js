import {createWriteStream, createReadStream} from 'fs';
import {createUnzip} from 'zlib';

const decompress = async () => {
    const source = createReadStream('./files/archive.gz');
    const destination = createWriteStream('./files/fileToCompress.txt');

    source.pipe(createUnzip()).pipe(destination);
};

await decompress();
