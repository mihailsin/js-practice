// function resolvedExample() {
//     console.log(1);
//     new Promise((resolve, reject) => {
//         console.log('4');
//         return resolve('Ok!');
//     }).then((res) => {
//         console.log({ res });
//     });
//     console.log(2);
//     let i = 0;
//     for (let i = 0; i < 10000000000; i++) {
//         i++;
//     }
//     console.log(3);
// }

function rejectedBADExample() {
    return new Promise((resolve, reject) => {
        reject('BAD!');
    });
}

// try {
//     // ❗не словит ошибку
//     rejectedBADExample();
// } catch (error) {
//     console.log({ error });
// }

// (async () => {
//     try {
//         // ✅ словит ошибку
//         await rejectedBADExample();
//     } catch (error) {
//         console.log({ error });
//     }
// })();

async function func() {
    return new Promise((resolve) => {
        resolve('RESOLVED!');
    });
}

console.log(1);
console.log(2);
(async () => {
    console.log(3);
    // await doesn't blocks the script; see the logs❗ (proof)
    const p = await func();
    console.log(p);
    console.log(4);
})();

console.log(5);
// 1, 2, 3, 5, ${p}, 4

/**
 console.log(1) и console.log(2) → выполняются синхронно.

Вызов IIFE (async () => { ... })():

асинхронная функция сразу начинает выполняться;

доходит до console.log(3) → выводит его;

доходит до await func().

await делает следующее:

приостанавливает выполнение этой асинхронной функции, но не весь поток;

возвращает управление обратно в основной event loop.

console.log(5) → выполняется сразу после выхода из IIFE (пока промис в await не зарезолвился).

Как только промис (func()) зарезолвился:
оставшийся код после await в асинхронной функции продолжает выполняться:
выводит RESOLVED!, потом 4.
 */

const p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(1);
    }, 2000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(2);
    }, 2000);
});

Promise.allSettled([p1, p2]).then((winner) => {
    console.log({ winner });
});
