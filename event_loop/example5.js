console.log('start');

setTimeout(() => {
    console.log('T1');

    process.nextTick(() => {
        console.log('N1');
    });

    Promise.resolve().then(() => {
        console.log('P1');
    });

    setTimeout(() => {
        console.log('T2');
    }, 0);
}, 0);

Promise.resolve().then(() => {
    console.log('P2');
});

process.nextTick(() => {
    console.log('N2');
});

console.log('end');
// start, end, N2, P2, T1, N1, P1, T2
