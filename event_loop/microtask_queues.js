process.nextTick(() => {
    console.log(1);
});
Promise.resolve().then(() => {
    console.log(5);
});
process.nextTick(() => {
    console.log(2);
    process.nextTick(() => {
        console.log(3);
    });
});
process.nextTick(() => {
    console.log(4);
});
Promise.resolve().then(() => {
    console.log(6);
    process.nextTick(() => {
        console.log(7);
    });
});
Promise.resolve().then(() => {
    console.log(8);
});
