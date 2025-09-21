const fs = require('fs');
const path = require('path');
fs.readFile(path.join(__dirname, '../', '.prettierrc'), (err, data) => {
    if (err) {
        console.log(err);
    }
    if (data) {
        console.log(data);
    }
});
process.nextTick(() => {
    console.log(1);
});
console.log(2);
console.log(3);
Promise.resolve(4).then((data) => {
    console.log(data);
});

setImmediate(() => {
    console.log(333);
});
process.nextTick(() => {
    console.log(5);
});
setTimeout(() => {
    console.log(6);
}, 0);
const prm = Promise.resolve(5);
console.log(prm);

async function resolve(promise) {
    const val = await promise;
    console.log(val);
}
resolve(prm);

// 2,3
