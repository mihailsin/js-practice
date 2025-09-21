// посчитать сумму всех элементов массива
const arr = [1, 5, 2, 2, 3, 7, 9, 2];

const sum = arr.reduce((acc, val) => (acc += val), 0);

console.log(sum);
