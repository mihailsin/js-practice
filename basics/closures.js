/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */

/**
  Считается, что язык имеет функции первого класса, когда с функциями в этом языке можно обращаться, как с любыми значениями: 
  функцию можно передать в другую функцию в качестве аргумента, функцию можно вернуть из другой функции, функцию можно присвоить как значение переменной
 */

function greet(greeting) {
    return function say(name) {
        // Замыкание = функция + окружение, в котором она была создана.
        // Функция say имеет доступ к переменной greeting, т.к. она находится в лексическом окружении функции say
        console.log(greeting, ' ', name);
    };
}

const sayFunc = greet('Hello');
sayFunc('John');

// or
greet('Hi')('Bob');

function functionsCreator() {
    const arr = [];

    for (let i = 0; i < 3; i++) {
        // На каждой итерации цикла создаётся новое лексическое окружение, в котором своя копия переменной i.
        // Когда мы вызовем эти функции, каждая будет иметь свою версию i в замыкании: 0, 1, 2
        arr.push(function () {
            console.log(i);
        });
    }

    return arr;
}

function oldFunctionsCreator() {
    const arr = [];

    for (var i = 0; i < 3; i++) {
        // У var функциональная область видимости (нет блочной).
        // Переменная i одна на все итерации цикла.
        // Все замкнутые функции запоминают ссылку на одну и ту же переменную i, а не её значение на момент итерации.
        // Когда цикл завершится, i === 3, и все функции выведут 3.
        arr.push(function () {
            console.log(i);
        });
    }

    return arr;
}

function enforceBlockScope() {
    const arr = [];

    for (var i = 0; i < 3; i++) {
        // Каждый вызов IIFE создаёт новый scope.
        // Переменная j хранится в отдельном лексическом окружении.
        // В отличие от var i, она не общая для всех функций.
        (function (j) {
            arr.push(function () {
                console.log(j);
            });
        })(i);
    }

    return arr;
}

const functions = functionsCreator();
functions.forEach((f) => f());
console.log('-----------------------------------');

const oldFunctions = oldFunctionsCreator();
oldFunctions.forEach((f) => f());
console.log('-----------------------------------');

const enforcedBlockScope = enforceBlockScope();
enforcedBlockScope.forEach((f) => f());
