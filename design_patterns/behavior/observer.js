/* eslint-disable max-classes-per-file */
/**
 Observer - это поведенческий паттерн проектирования, который создаёт механизм подписки, позволяющий одним объектам
 следить и реагировать на события, происходящие в других объектах.
 */

class Publisher {
    constructor() {
        this._observers = [];
    }

    subscribe(observer) {
        this._observers.push(observer);
        return this;
    }

    unSubscribe(observer) {
        this._observers = this._observers.filter((s) => s !== observer);
        return this;
    }

    emit(payload) {
        this._observers.forEach((obs) => {
            obs.update(payload);
        });
    }

    get observers() {
        return this._observers;
    }
}

class Observer {
    constructor(state) {
        this._state = state;
        this._initialState = state;
    }

    update(newState) {
        this._state = newState;
    }

    get currentState() {
        return this._state;
    }
}

const obs1 = new Observer('state');
const obs2 = new Observer('another state');

const publisher = new Publisher();

publisher.subscribe(obs1).subscribe(obs2);

console.log(publisher.observers);

publisher.unSubscribe(obs1);
console.log(publisher.observers);
