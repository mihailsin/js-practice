const arr = [1, 2, 3, 4, 5, 6, 7, 8];

function reverseArray(array) {
    console.log('Method Invoked!');
    const reversedArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }

    return reversedArray;
}

const reversedArray = reverseArray(arr);
console.log(reversedArray);
