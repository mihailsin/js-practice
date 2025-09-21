/* eslint-disable no-var */
/* eslint-disable no-loop-func */
/* eslint-disable vars-on-top */

// for (var i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }
// 10,10,10..., 10

// additional variable
// for (var i = 0; i < 10; i++) {
//     setTimeout(
//         (j) => {
//             console.log(j);
//         },
//         1000,
//         i,
//     );
// }

// create functional scope
for (var i = 0; i < 10; i++) {
    (function (j) {
        setTimeout(() => {
            console.log(j);
        }, 1000);
    })(i);
}
