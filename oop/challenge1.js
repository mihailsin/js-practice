// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649063#overview
// Coding Challenge #1

/**  
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h
*/

/**
 *
 * @param {string} make
 * @param {number} speed
 */
function Car(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function accelerate() {
    this.speed += 10;
    console.log(`${this.make} runs at ${this.speed}`);
    return this;
};

Car.prototype.brake = function brake() {
    this.speed -= 5;
    console.log(`${this.make} runs at ${this.speed}`);
    return this;
};

const bmw = new Car('BMW', 100);
bmw.accelerate().accelerate().brake();

function ElectricCar(make, speed, battery) {
    Car.call(this, make, speed); // вызываем родительский конструктор
    this.battery = battery;
}

// Устанавливаем цепочку прототипов
ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

ElectricCar.prototype.getCharge = function getCharge() {
    console.log(this.battery);
    return this;
};

const tesla = new ElectricCar('Tesla', 80, 100);
tesla.accelerate().brake().brake().getCharge();
