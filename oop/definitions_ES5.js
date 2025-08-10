/**
 * OOP - это парадигма программирования, в которой программа строится вокруг объектов, а не вокруг логики и функций,
 * как в процедурном программировании. В ООП, данные и методы, работающие с этими данными, объединяются в объекты,
 * которые взаимодействуют друг с другом. Основные принципы ООП включают абстракцию, инкапсуляцию, наследование и полиморфизм.
 */

/**
 * Абстракция — выделение существенных свойств и операций объекта, упрощённое представление реальности
 * (что объект делает), без всех деталей реализации. Это про интерфейс и модель предметной области.
 */

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
    // this.getFullName = function getFullName() {
    //     return `${this.firstName} ${this.lastName}`;
    // };
}

// ✅ Добавим метод getFullName на прототип. Это пример реализации прототипного наследования.
Person.prototype.getFullName = function getFullName() {
    return `${this.firstName} ${this.lastName}`;
};

Person.staticMethod = function () {
    return 'I am static and you can not call me from the instances!';
};

const me = new Person('Mike', 'Sinkov', 37);

console.log({ me });
// { me: Person { firstName: 'Mike', lastName: 'Sinkov', age: 37 } }, здесь нет метода getFullName, зато он есть на прототипе:
console.log({ prototype: Person.prototype });
console.log({ myFullName: me.getFullName() }); // 'Mike Sinkov' - не найдя метод getFullName у объекта me - интерпретатор "пошел" по цепочке прототипов
console.log({ proto: me.__proto__ }); // true
console.log({ protoIsALinkToPrototype: me.__proto__ === Person.prototype }); // true

console.log(Person.prototype);

const array = [1, 2, 3, 4]; // new Array()
console.log(array); // [];

console.dir(Object.getPrototypeOf(array), { depth: null });
console.dir(array.__proto__, { showHidden: true }); // forEach, map, filter...

console.log(Person.staticMethod());
