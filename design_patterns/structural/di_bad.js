/* eslint-disable max-classes-per-file */
class Logger {
    // eslint-disable-next-line class-methods-use-this
    log(message) {
        console.log(message);
    }
}

class UserService {
    constructor() {
        this.logger = new Logger(); // жесткая связь, плохо для тестов.
    }

    createUser(firstName, lastName) {
        const user = { firstName, lastName };
        this.logger.log(`User ${firstName} ${lastName} created`);

        return user;
    }
}

const userService = new UserService();

const user = userService.createUser('John', 'Doe');
