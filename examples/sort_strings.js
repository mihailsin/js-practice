const arr = [
    {
        name: 'John',
        age: 43,
    },
    {
        name: 'Bob',
        age: 33,
    },
    {
        name: 'Jane',
        age: 35,
    },
];

// const sortedInAscOrderByName = arr.sort((a, b) => {
//     if (a.name < b.name) {
//         return -1;
//     }
//     if (a.name === b.name) {
//         return 0;
//     }

//     return 1;
// });

const sortedInAscOrderByName = arr.sort((a, b) => a.name.localeCompare(b.name));

console.log(sortedInAscOrderByName);

const sortedInDescOrderByName = arr.sort((a, b) => b.name.localeCompare(a.name));

console.log(sortedInDescOrderByName);

const numsArr = [1, 5, 3, 8, 2, 9];

const sorted = numsArr.sort();
console.log(sorted);
