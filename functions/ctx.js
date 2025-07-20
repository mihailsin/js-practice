const object = {
    a: 2,
    b: 5,
};

function multiplyExistingProperties() {
    return this.a * this.b;
}

const res = multiplyExistingProperties();
console.log(res); // NaN (undefined * undefined)

// bind: will create a copy of a function with a bound context

const funcWithBoundCtx = multiplyExistingProperties.bind(object);
console.log(funcWithBoundCtx()); // 10 (2 * 5)

// call: will call given function once within a context passed as 1st argument

console.log(multiplyExistingProperties.call(object)); // 10 (2 * 5)

// apply: same as call, but arguments should be passed as an array

// ----------------------------------------------------------------------------

// currying: Function currying - creating a copy of a function, but with some preset (predefined) parameters;

function multiply(a, b) {
    return a * b;
}

const multiplyByTwo = multiply.bind(this, 2);

const ten = multiplyByTwo(5);
console.log({ ten });
