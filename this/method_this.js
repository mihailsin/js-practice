/**
Это стрелка? → если да, ищи this во внешней функции.

Вызывается с new? → this = новый объект.

Вызывается с .call / .apply / .bind? → бери явно переданное значение.

Вызывается как obj.method()? → this = obj.

Просто вызов fn()? → strict → undefined, иначе глобал.

Обработчик DOM? → this = элемент.
 */

const obj = {
    a: 1,
    b: '2',
    logThis() {
        console.log(this); // this будет ссылкой на объект, который вызывает данный метод
    },
    arrowLogThis: () => {
        console.log(this); // ❗Стрелочные функции — исключение: у них this лексический, то есть определяется в момент объявления.
    },
    wrappedLogThis() {
        const logThis = () => {
            console.log(this); // ❗ возмьет this из родительского окружения. в данном случае obj
        };

        logThis();
    },
};

const obj2 = {
    c: 3,
};

obj.logThis(); // obj

obj2.logThis = obj.logThis;
obj2.logThis(); // obj2 this в методах указывает на объект, который этот метод вызвал❕

obj.wrappedLogThis();
obj.arrowLogThis();
