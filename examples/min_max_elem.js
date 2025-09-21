const arr = [1, 5, 2, 2, 3, 7, 9, 2];

// let min = Infinity;
// let max = -Infinity;

// arr.forEach((n) => {
//     if (n < min) min = n;
//     if (n > max) max = n;
// });

let min;
let max;

arr.forEach((n, i) => {
    if (i === 0) {
        min = n;
        max = n;
    } else {
        if (n < min) min = n;
        if (n > max) max = n;
    }
});

console.log(min, max);
