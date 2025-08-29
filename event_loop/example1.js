const fs = require('fs');
const path = require('path');

function syncFunc1() {
    console.log(1);
}

function syncFunc2() {
    console.log(2);
}

function printFile(targetPath) {
    const cb = (err, data) => {
        console.log({ this: this });
        if (err) throw new Error(err);
        console.log({ read: JSON.parse(data.toString()) });
    };

    fs.readFile(targetPath, cb);
}

try {
    syncFunc1();
    printFile(path.join(__dirname, '../.prettierrc'));
    syncFunc2();
} catch (e) {
    console.error(e);
}
