function Logger(logString: string) {
    console.log("LOGGER");
    return function (constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };
}

function WithTemplate(template: string, hookId: string) {
    console.log("TEMPLATE");
    return function <T extends { new (...args: any[]): { name: string } }>(
        originalConstructor: T,
    ) {
        return class extends originalConstructor {
            constructor(..._: any[]) {
                super();
                console.log("Rendering Template");
                const hookEl = document.getElementById(hookId);
                const p = new originalConstructor();
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector("h1")!.textContent = this.name;
                }
            }
        };
    };
}

@Logger("LOGGING - PERSON")
@WithTemplate("<h1>Hello World</h1>", "app")
class Person {
    name = "Abhishek";
    constructor() {
        console.log("Creating person object...");
    }
}

const people = new Person();

console.log(people);

//

function Log(target: any, propertyName: string | Symbol) {
    console.log("Property Decorator!");
    console.log(target, propertyName);
}

function Logv2(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log("Accessor Decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Logv3(
    target: any,
    name: string | Symbol,
    descriptor: PropertyDescriptor,
) {
    console.log("Method Decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Logv4(target: any, name: string | Symbol, position: number) {
    console.log("Parameter Decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product {
    @Log
    title: string;
    private _price: number;

    @Logv2
    set price(val: number) {
        if (val > 0) {
            this._price = val;
        } else {
            throw new Error("Invalid price - should be positive!");
        }
    }

    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Logv3
    getPriceWithTax(@Logv4 tax: number) {
        return this._price * (1 + tax);
    }
}

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjDescriptor;
}

class Printer {
    message = "This Works!";

    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();

const button = document.querySelector("button")!;
// button.addEventListener("click", p.showMessage.bind(p));
button.addEventListener("click", p.showMessage);

// ---------

interface ValidatorConfig {
    [property: string]: {
        [validatableProp: string]: string[]; // ['required', 'positive']
    };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        [propName]: ["required"],
    };
}

function PositiveNumber(target: any, propName: string) {
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ["positive"],
    };
}

function validate(obj: any) {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case "required":
                    isValid = isValid && !!obj[prop];
                    break;
                case "positive":
                    isValid = isValid && obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
}

class Course {
    @Required
    title: string;
    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const titleEl = document.getElementById("title") as HTMLInputElement;
    const priceEl = document.getElementById("price") as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value;

    const createdCourse = new Course(title, price);

    if (!validate(createdCourse)) {
        alert("Invalid Input, Please try again!");
        return;
    }
    console.log(createdCourse);
});
