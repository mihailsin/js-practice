function declaration(...args) {
    console.dir({ args });
    console.dir(this);
}

declaration(1, 'a', 54, { a: 2 });
