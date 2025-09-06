const fs = require('fs');
const path = require('path');

const writeStream = fs.createWriteStream(path.join(__dirname, 'stdin.txt'), { flags: 'a' });

process.stdin.pipe(writeStream);
