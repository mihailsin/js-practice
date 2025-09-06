const fs = require('fs');
const path = require('path');

const readStream = fs.createReadStream(path.join(__dirname, 'long-doc.txt'));
const writeStream = fs.createWriteStream(path.join(__dirname, 'copy.txt'), { flags: 'a' });

/**
 *
 * @param {'console'|'file'} destination
 */
function writeTo(destination) {
    switch (destination) {
        case 'console':
            readStream.pipe(process.stdout);
            break;

        case 'file':
            readStream.pipe(writeStream);
            break;

        default:
            break;
    }
}

writeTo('console');
