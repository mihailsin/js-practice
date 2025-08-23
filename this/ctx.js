class User {
    constructor(name) {
        this.name = name;
    }

    greet = () => {
        console.log(this.name);
    };
}

const u = new User('Nina');
u.greet();
const g = u.greet;
g();
