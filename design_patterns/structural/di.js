/**
 Inversion of control (IoC) - Инверсия управления - это архитектурный паттерн при использовании которого контроль
 над потоком программы передается внешнему контейнеру или фреймворку, а не самому коду.
 */

/**
 Dependency Injection (DI) — Внедрение зависимостей
 Частный случай IoC, когда объект не создаёт свои зависимости сам, а получает их извне (например, через параметры конструктора, функции или сеттеры).
 в JavaScript, как и в других языках, направлен на уменьшение связанности между компонентами системы.
 Это достигается тем, что вместо создания зависимостей внутри компонента, они предоставляются извне. 
 DI помогает сделать код более модульным, тестируемым и поддерживаемым.
 */

/* eslint-disable max-classes-per-file */
class Logger {
    // eslint-disable-next-line class-methods-use-this
    log(message) {
        console.log(message);
    }
}

class UserService {
    constructor(logger) {
        /**
         DI
         Сервис получает зависимости (в конструкторе или методе)
         Он не знает, откуда они пришли, и не отвечает за их создание
         Это делает IoC-контейнер, или код на уровне выше
         */
        this.logger = logger; // мы не создаем экземпляр логгера, мы получаем его извне ✅
    }

    createUser(firstName, lastName) {
        const user = { firstName, lastName };
        this.logger.log(`User ${firstName} ${lastName} created`);

        return user;
    }
}

const logger = new Logger();
const userService = new UserService(logger);

const user = userService.createUser('John', 'Doe');
