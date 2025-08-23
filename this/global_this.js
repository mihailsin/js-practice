console.log(this); // {}, because node wraps our code like following:
// (function (exports, require, module, __filename, __dirname) {
// your code here
// });
// and it seems that 'this' points to 'exports'

exports.default = { a: 1 };
console.log(this); // exports
