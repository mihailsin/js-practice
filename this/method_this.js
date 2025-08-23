const obj = {
    a: 1,
    b: '2',
    logThis() {
        console.log(this); // this будет ссылкой на объект, который вызывает данный метод
    },
    arrowLogThis: () => {
        console.log(this);
    },
    wrappedLogThis() {
        const logThis = () => {
            console.log(this); // ❗ возмьет this из родительского окружения. в данном случае obj
        };

        logThis();
    },
};

const obj2 = {
    c: 3,
};

obj.logThis(); // obj

obj2.logThis = obj.logThis;
obj2.logThis(); // obj2 this в методах указывает на объект, который этот метод вызвал❕

obj.wrappedLogThis();
obj.arrowLogThis();
