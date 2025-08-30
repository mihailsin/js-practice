setImmediate(() => {
    console.log('X');
});

setTimeout(() => {
    console.log('Y');
}, 0);

Promise.resolve().then(() => {
    console.log('Z');
});

process.nextTick(() => {
    console.log('W');
});
