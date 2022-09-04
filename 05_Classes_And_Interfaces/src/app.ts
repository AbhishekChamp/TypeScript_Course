// type AddFn = (a: number, b: number) => number;
interface AddFn {
    (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
};

interface Named {
    readonly name: string;
}

interface Greetable extends Named {
    greet(phase: string): void;
}

class Person implements Greetable {
    name: string;
    age = 25;

    constructor(n: string) {
        this.name = n;
    }

    greet(phrase: string): void {
        console.log(phrase + " " + this.name);
    }
}

let user1: Greetable;

user1 = new Person("Abhishek");

user1.greet("Hi There - I am");

console.log(add(8, 9));
