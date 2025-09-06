// const { Duplex, EventEmitter } = require('stream');
const zlib = require('zlib');
const fs = require('fs');
const path = require('path');

const compress = zlib.createGzip();

// EventEmitter.setMaxListeners(1);

const readStream = fs.createReadStream(path.join(__dirname, 'long-doc.txt'));
const writeStream = fs.createWriteStream(path.join(__dirname, 'copy.gz'));

let unCompressedSize = 0;

readStream.on('data', (chunk) => {
    unCompressedSize += chunk.length;
});

writeStream.on('finish', () => {
    console.log({ unCompressedSize, compressedSize: writeStream.bytesWritten });
});

readStream.pipe(compress).pipe(writeStream);
