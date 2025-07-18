/**
PRIMITIVES:
undefined - lack of existence.
null - explicitly declared lack of existence (don't use undefined - leave it for the engine, otherwise it will cause debugging issues; use null instead;)
boolean - true/false flag
number - js has 1 type for all numeric values, there is no <Integer> type in js
string - sequence of characters wrapped in quotes
symbol - (started from ES6)

*/

/**
 * OPERATORS are basically functions that written differently. Generally Operators take two parameters and returns one result
 * basically js uses infix notation function invokation (i.e. 3+5) it is human readable, unlike prefix notation (+3,5) or postfix notation (3,5+)
 *
 */

// multiplication will be executed first, since this operator has a higher precedence than deduction.
console.log(5 - 5 * 25); // -120

// if precedence is equal, operators (functions) will be invoked in left-to-right (left associativity) or right-to-left order (right associativity), depending on the operator

// left associativity:
console.log(5 - 5 + 2 + 7); // 9

// right associativity:
let a = 3;
let b = 4;
const c = 5;

a = b = c;

console.log(a, b, c); // 5 5 5 (!!!not 4 5 5, right-to-left)

/**
 * COERCION: converting a value from one type to another
 */

// explicit coercion (string --> boolean):
let d = '';
console.log(typeof d);
d = !!d;
console.log(typeof d);

// implicit coercion: number --> string
const res = 1 + '2';
console.log(res, typeof res); // '12' string

/**
 * COMPARISON OPERATORS
 */
console.log(3 < 2 < 1); // !!!true (because of the types coercion: (false < 1 is true))
console.log(Number(false)); // 0 is actually less than 1

console.log(0 == false); // true - type coerced;

console.log(0 === false); // false - strict equality operator doesnt coerced the types
// strict enequality/enequality acts the same way
