/**
 Singleton - порождающий паттерн. По сути singleton - это единственный экземпляр класса на все приложение.
 Хорошим примером паттерна является ODM Mongoose: единственный экземпляр помогает нам избежать "лишних" подключений к Б.Д.
 */

class Singleton {
    constructor(data) {
        if (Singleton.exist) {
            // eslint-disable-next-line no-constructor-return
            return Singleton.instance;
        }

        Singleton.instance = this;
        Singleton.exist = true;

        this._data = data;
    }

    get data() {
        return this._data;
    }

    set data(newData) {
        this._data = newData;
    }
}

const instance = new Singleton('data');
console.log(instance.data);

instance.data = 'new data';
console.log(instance.data);
