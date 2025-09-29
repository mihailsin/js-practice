/**
 * OOP - это парадигма программирования, в которой программа строится вокруг объектов, а не вокруг логики и функций,
 * как в процедурном программировании. В ООП, данные и методы, работающие с этими данными, объединяются в объекты,
 * которые взаимодействуют друг с другом. Основные принципы ООП включают абстракцию, инкапсуляцию, наследование и полиморфизм.
 */

/**
 * Абстракция — выделение значимых характеристик объекта и скрытие несущественных деталей.
 * Позволяет описывать объект в рамках того, ЧТО он делает, а не КАК он это делает.
 * (показываем только главное)❕
 */

/**
 * Инкапсуляция - это объединение данных и методов, работающих с этими данными в единое целое и ограничение доступа
 * к внутренним деталям реализации
 * (скрываем реализацию)❕
 */

/**
 * Наследование - механизм обеспечивающий иерархические связи между объектами и позволяющий перенимать свойства
 * и методы родительского класса.
 * (переиспользуем код)❕
 */

/**
 * Полиморфизм - способность объектов с одинаковым интерфейсом иметь разное поведение. Один и тот же метод может работать
 * по разному в зависимости от объекта, который содержит в себе этот метод.
 * (один интерфейс - разные реализации)❕

/**
 * Person - это "класс" (на самом деле - не совсем). Класс (или функция - конструктор) - это шаблон для создания объектов,
 * определяющий структуру и поведение объектов этого класса.
 *
 *
 * @param {string} firstName
 * @param {string} lastName
 * @param {number} age
 */
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    // ❌Мы засоряем память. Каждый экземпяр будет иметь свой собственный метод getFullName !
    this.getFullName = function getFullName() {
        return `${this.firstName} ${this.lastName}`;
    };
}

// ✅ Добавим метод getFullName на прототип. Это пример реализации прототипного наследования.
// Person.prototype.getFullName = function getFullName() {
//     return `${this.firstName} ${this.lastName}`;
// };

Person.staticMethod = function () {
    return 'I am static and you can not call me from the instances!';
};

const me = new Person('Mike', 'Sinkov', 37);
console.log({ me });

const persons = [];
let i = 0;

while (i < 10000000) {
    persons.push(new Person('Name', 'Surname', i));
    i++;
}

const bytes2megaBytes = (bytes) => (bytes / 1000 / 1000).toFixed(2);

const memoryUsageLog = process.memoryUsage();
const memoryUsageInMegabytes = Object.keys(memoryUsageLog).reduce((acc, key) => ({ ...acc, [key]: bytes2megaBytes(memoryUsageLog[key]) }), {});

/**
 {
  rss: '1485.28', Общий объём памяти, занимаемый процессом в ОЗУ.
  heapTotal: '1380.36', Общий объём памяти, выделенный под кучу V8. (может расти при необходимости)
  heapUsed: '1336.25', Фактическое использование памяти внутри кучи.
  external: '1.32',
  arrayBuffers: '0.01'
}
 */
console.log(memoryUsageInMegabytes);

// { me: Person { firstName: 'Mike', lastName: 'Sinkov', age: 37 } }, здесь нет метода getFullName, зато он есть на прототипе:
// console.log({ prototype: Person.prototype });
// console.log({ myFullName: me.getFullName() }); // 'Mike Sinkov' - не найдя метод getFullName у объекта me - интерпретатор "пошел" по цепочке прототипов
// console.log({ proto: me.__proto__ });
// console.log({ protoIsALinkToPrototype: me.__proto__ === Person.prototype }); // true

// console.log(Person.prototype);

// const array = [1, 2, 3, 4]; // new Array()
// console.log(array); // [];

// console.dir(Object.getPrototypeOf(array), { depth: null });
// console.dir(array.__proto__, { showHidden: true }); // forEach, map, filter...

// console.log(Person.staticMethod());
