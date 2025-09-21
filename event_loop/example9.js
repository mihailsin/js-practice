/* eslint-disable promise/catch-or-return */
const promise = new Promise((resolve, reject) => {
    console.log(1);

    setTimeout(() => {
        console.log(2);
        resolve(3);
        console.log(4);
    }, 0);

    console.log(5);
});

promise.then((res) => console.log(res));
console.log(6);
