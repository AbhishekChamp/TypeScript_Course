function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };
}

@Logger("LOGGING - PERSON")
class Person {
    name = "Abhishek";
    constructor() {
        console.log("Creating person object...");
    }
}

const people = new Person();

console.log(people);
