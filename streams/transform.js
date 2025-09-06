const fs = require('fs');
const path = require('path');
const { Transform } = require('stream');

const transform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    },
});

// transform.on('data', (chunk) => {});

const readStream = fs.createReadStream(path.join(__dirname, 'long-doc.txt'));
const writeStream = fs.createWriteStream(path.join(__dirname, 'copy.txt'), { flags: 'a' });

readStream.pipe(transform).pipe(writeStream);
