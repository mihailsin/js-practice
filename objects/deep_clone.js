const obj = {
    a: [{ a: { b: 'c' } }, 2, { v: 3 }],
    b: 2,
    c: {
        a: 7,
        d: function d() {
            console.log('123');
        },
    },
    d: NaN,
};

function clone(object) {
    const copy = {};
    Object.keys(object).forEach((key) => {
        if (typeof object[key] === 'object' && obj[key] !== null && !Array.isArray(object[key])) {
            copy[key] = clone(object[key]);
        } else if (Array.isArray(object[key])) {
            copy[key] = object[key].map((v) => {
                return clone(v);
            });
        } else {
            copy[key] = object[key];
        }
    });

    return copy;
}

const copy = clone(obj);

// copy.a[0] = 1;
// copy.d = 130;
// obj.a[0] = 1;
console.dir(copy, { depth: null });
console.dir(obj, { depth: null });
