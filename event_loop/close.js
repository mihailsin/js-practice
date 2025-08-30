const fs = require('fs');

const stream = fs.createReadStream(__filename);
stream.close();

stream.on('close', () => {
    console.log('closed!');
    process.nextTick(() => {
        console.log(3);
    });
    Promise.reject().catch(() => {
        console.log(4);
    });
});

const stream1 = fs.createReadStream(__filename);
stream1.close();

stream1.on('close', () => {
    console.log('closed1!');
});
