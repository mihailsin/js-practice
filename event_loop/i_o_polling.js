const fs = require('fs');

setTimeout(() => {
    console.log(1);
}, 0);

fs.readFile(__filename, () => {
    // ❗коллбек будет зарегистрирован во время i/o polling (между i/o и check стадиями), поэтому будет отправлен в стек вызовов лишь на второй итерации
    console.log(2);
});

setImmediate(() => {
    console.log(3);
});

// ❗ 1, 3, 2
