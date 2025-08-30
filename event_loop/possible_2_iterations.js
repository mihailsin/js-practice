const fs = require('fs');

setTimeout(() => {
    // ❗возможно, это коллбек "не успеет" зарегистрироваться и будет зарегистрирован на второй итерации цикла!
    console.log(1);
}, 2);

fs.readFile(__filename, () => {
    console.log(2);
});
