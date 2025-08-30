process.nextTick(() => {
    console.log('N1');
    process.nextTick(() => {
        console.log('N2');
    });
});

Promise.resolve().then(() => {
    console.log('P1');
    process.nextTick(() => {
        console.log('N3');
    });
    Promise.resolve().then(() => {
        console.log('P2');
    });
});

setTimeout(() => {
    console.log('T1');
    Promise.resolve().then(() => {
        console.log('P3');
    });
    process.nextTick(() => {
        console.log('N4');
    });
}, 0);
// N1, N2, P1, P2, N3, T1, N4, P3
