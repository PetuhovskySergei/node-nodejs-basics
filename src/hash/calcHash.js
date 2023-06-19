import {createHash} from 'crypto'
import {readFile} from 'node:fs';

const calculateHash = async () => {
    readFile('./files/fileToCalculateHashFor.txt', (err, data) => {
        if (err) throw err;
        console.log(createHash('SHA256').update(data).digest('hex'))
    })
};

await calculateHash();
