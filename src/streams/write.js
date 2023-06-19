import {createWriteStream} from 'fs';

const write = async () => {
    const write = createWriteStream('./files/fileToWrite.txt');
    process.stdin.pipe(write);
    console.log('To create a chunk you need to type something in the terminal and after press Enter, for close you need to press ctrl + c')
};

await write();
