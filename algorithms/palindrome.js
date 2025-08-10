const testStr = 'ekitike';

function isPalindrome(string) {
    // eslint-disable-next-line for-direction
    // for (let i = iterable.length - 1; i >= 0; i--) {
    //     console.log(iterable[i]);
    //     arr.push(iterable[i]);
    // }

    return string.toLowerCase().split('').reverse().join('') === string;
}

const pal = isPalindrome(testStr);
console.log(pal);
