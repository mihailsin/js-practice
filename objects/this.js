console.log(this); // {}, because node wraps our code like following:
// (function (exports, require, module, __filename, __dirname) {
// your code here
// });
// and it seems that 'this' points to 'exports'

const glob = 'string';

function func() {
    const a = 1;
    const b = 2;

    console.log(this);
    this.variable = 'Assigned in func';
}

func(); // global

console.log({ variable }); // 'Assigned in func'
variable = 'ReAssigned in global';
console.log({ variable }); // 'ReAssigned in global'

const object = {
    a: 1,
    n: 'x',
    get this() {
        return this;
    },

    setName(name) {
        const self = this;
        this.name = name;
        console.log(this.name);
        function resetName(name1) {
            // this.name = name1; // it will set a global.name ! how to fix it?
            self.name = name1; // this will do the trick: self = object
            console.log({ self });
        }
        resetName('RESET');
    },

    arrowMethod: () => {
        console.log({ arrowThis: this }); // global object
    },
};

console.dir({ this: object.this }, { depth: null });

const objectCtx = object.this;

objectCtx.c = 'assigned outside';

console.log({ object });

object.setName('NAME FROM OUTSIDE');
object.arrowMethod();
// console.log({ name });
