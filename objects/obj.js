// variable a is a reference to the spot in memory (i.e. a --> 0x001)
const a = {
    a: 1,
    b: 2,
    c: 3,
};

let b = a; // variable b is a reference to the same spot 0x001

// so when I change a property of 'a'
a.a = 10;
// i'm changing an object that exists in memory; and all variables, that held a reference to that object, now will hold a refernce to updated object

console.dir({ a }, { depth: null }); // a.a = 10
console.dir({ b }, { depth: null }); // b.a = 10

// that was an example of mutation (an operation that "changes" original value)

// and here is an example of a function that mutates object

/**
 * Impure function
 * @param {object} object object
 * @param {string} property field that the given object helds
 * @param {number} value any Number
 * @returns {void}
 */
function mutate(object, property, value) {
    object[property] = value;
}

mutate(b, 'c', 500);

console.dir({ ojectAAfterMutation: a }, { depth: null }); // a.c = 500
console.dir({ ojectBAfterMutation: b }, { depth: null }); // b.c = 500

// I was changing a property of existing object
// lets assign a new object

b = { new: 'Object' };

console.dir({ ojectAAfterBWasReassigned: a }, { depth: null }); // a will still hold the reference to the 0x001
console.dir({ ojectBAfterReassignment: b }, { depth: null }); // but b will now have a reference to a new "place" in memory (0x002); we created a new object;

// so:
const c = { a: 1 }; // new address 0x003
const d = { a: 1 }; // new address 0x004

// therefore:
c.a = 2;
console.dir({ c }, { depth: null });
console.dir({ d }, { depth: null }); // d - not changed; why would it? it's reference points to the 0x004 and we're changed 0x003
