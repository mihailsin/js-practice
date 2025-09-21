const { log } = console;

function f() {
    if (true) {
        var a = 'a';
        let b = 'b';
        const c = 'c';
    }
    log(a); // 'a' переменные объявленные как var имеют функциональную область видимости и доступны во всей функции (не ограничены блоком)
    // log(b); // ReferenceError: b is not defined
    // log(c); // ReferenceError: c is not defined
}

f();

var a = 1;
log(a);
var a = 2;
log(a);
a = 3;
log(a);
