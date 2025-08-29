process.nextTick(() => {
    console.log(1);
});
console.log(2);
console.log(3);
Promise.resolve().then(() => {
    console.log(4);
});
process.nextTick(() => {
    console.log(5);
});
setTimeout(() => {
    console.log(6);
}, 0);
const prm = Promise.resolve(5);
console.log(prm);
