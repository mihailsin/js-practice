const { processors } = require('eslint-plugin-prettier');

function constHoisting() {
    console.log(a); // ReferenceError: Cannot access 'a' before initialization
    // const is not hoisted;

    const a = 'a';
}

function letHoisting() {
    console.log(a); // ReferenceError: Cannot access 'a' before initialization
    // let is not hoisted;

    let a = 'a';
}

function varHoisting() {
    console.log(a); // undefined; (it is exists in memory, before the code is being executed line-by-line, the interpreter "knows" that
    // var a exists. All VARIABLES ARE INITIALLY SET AS undefined;)
    // var hoisted;

    var a = 'a';
    console.log(a); // 'a'
}

// varHoisting();
// letHoisting();
// constHoisting();
// -------------------------------------------------------------------------------------------
// function b() {
//     console.log(myVar); // 1 (scope chain: myVar is undefined in the execution context of function b, but it was assigned in the
//     // global (module) context before function a has been invoked )
// }

// function a() {
//     myVar = 2;
//     console.log(myVar);
//     b();
// }

// let myVar = 1;
// a();

// ----------------------------------------------------------------------
//  following will work with var:
// if (true) {
//     var a = 2;
// }

// console.log(a); // 2

// but it won't work with let (let has a block scope)

if (true) {
    let b = 2;
}
console.log(b); // b is not defined

// --------------------------------------------------------------
// async function prs() {
//     // !!!!!!!!
//     await process.nextTick(() => {
//         console.log(3);
//     });

//     console.log(1);
// }

// prs();
// console.log(2);
