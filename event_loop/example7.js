const fs = require('fs');
console.log('start');

setTimeout(() => {
    console.log('T1');

    setImmediate(() => {
        console.log('IM1');
    });

    Promise.resolve().then(() => {
        console.log('P1');
    });

    process.nextTick(() => {
        console.log('N1');
    });
}, 0);

setImmediate(() => {
    console.log('IM2');
});

fs.readFile(__filename, () => {
    console.log('FS1');

    // ❗Обрати внимание на порядок: IM3, T2
    // вне i/o коллбека такой порядок не гарантирован!
    setTimeout(() => {
        console.log('T2');
    }, 0);

    setImmediate(() => {
        console.log('IM3');
    });

    Promise.resolve().then(() => {
        console.log('P2');
    });

    process.nextTick(() => {
        console.log('N2');
    });
});

Promise.resolve().then(() => {
    console.log('P3');
});

process.nextTick(() => {
    console.log('N3');
});

console.log('end');

// 1st iteration
// start, end, N3, P3, T1, N1, P1, IM2, IM1
// 2nd iteration
// FS1, N2, P2, IM3, T2,
