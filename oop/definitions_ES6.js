class ClassWithPrivateStaticField {
    static #privateStaticField = 42;

    static publicStaticMethod() {
        // When invoked through super, `this` still refers to Subclass
        return this.#privateStaticField;
    }
}
console.log(ClassWithPrivateStaticField.publicStaticMethod());
