/* eslint-disable max-classes-per-file */
/**
 "Обменник валют":
 let amount = 1000;
 let rate = 3.88;

 let exchange = amount / rate;

 Проблема: каждый раз, когда меняется rate, нам придется переопределять exchange = amount / rate;
 */

/**
 * Bank is responsible for the difinition or rate;
 * It also has subscribers ()
 */
class Bank {
    constructor() {
        this._subscribers = [];
    }

    subscribe(subscriber) {
        this._subscribers.push(subscriber);
        return this;
    }

    unsubscribe(subscriber) {
        this._subscribers = this._subscribers.filter((s) => s !== subscriber);
        return this;
    }

    notifyAboutRateChange(newRate) {
        this._subscribers.forEach((s) => s.updateRate(newRate));
    }

    get subscribers() {
        return this._subscribers;
    }
}

/**
 * CurrencyExchange has a method which implements a currency exchange
 * Bank can change a current rate any moment
 */
class CurrencyExchange {
    constructor(rate) {
        this._rate = rate;
    }

    exchange(amount) {
        console.log(`exchanged by rate ${this._rate}`);
        return amount / this._rate;
    }

    updateRate(newRate) {
        this._rate = newRate;
    }
}

const bank = new Bank();

const currencyExchange1 = new CurrencyExchange(3.95);
// let's subscribe to the rate changes:
bank.subscribe(currencyExchange1);

currencyExchange1.exchange(400);

// bank decided to change the rate
bank.notifyAboutRateChange(3.88);

// and we are aware of rate exchange
currencyExchange1.exchange(400);
