function greet(firstname, lastname) {
    console.log(`Hello ${firstname} ${lastname}`);
}

// we can assign properties values just like we do in regular objects
// in fact, functions are objects in JS:
greet.firstName = 'Mike';
greet.lastName = 'Sinkov';

// Note! 'name' value is a reserved property and any non-anonymous function has a name

greet(greet.firstName, greet.lastName);
console.dir({ greet }, { depth: null });
