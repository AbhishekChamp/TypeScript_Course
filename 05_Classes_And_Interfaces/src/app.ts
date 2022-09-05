// type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
};

interface Named {
    readonly name?: string;
    outputName?: string; // Optional parameter
}

interface Greetable extends Named {
    greet(phase: string): void;
}

class Person implements Greetable {
    name?: string;
    age = 25;

    constructor(n?: string) {
        if (n) {
            this.name = n;
        }
    }

    greet(phrase: string): void {
        if (this.name) {
            console.log(phrase + " " + this.name);
        } else {
            console.log("Hi!");
        }
    }
}

let user1: Greetable;
let user2: Greetable;

user1 = new Person("Abhishek");

user2 = new Person();

user1.greet("Hi There - I am");
user2.greet("Hi There - I am");

console.log(add(8, 9));
