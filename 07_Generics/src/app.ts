// const names: Array<string> = []; // string[]
// // name[0].split(' ');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("This is done!");
//     }, 2000);
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
    return (<any>Object).assign(objA, objB);
}

const mergedObj = merge({ name: "Abhishek" }, { age: 25 });
console.log(mergedObj.age);

interface lengthy {
    length: number;
}

function countAndDescribe<T extends lengthy>(element: T): [T, string] {
    let descriptionText = "Got no value.";
    if (element.length === 1) {
        descriptionText = "Got 1 element.";
    } else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}

console.log(countAndDescribe("Hi There!"));

function extractAndConvert<T extends object, U extends keyof T>(
    obj: T,
    key: U,
) {
    return "Value: " + obj[key];
}

extractAndConvert({ name: "Abhishek" }, "name");

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Abhishek");
textStorage.addItem("Champ");
textStorage.removeItem("Champ");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(8);
console.log(numberStorage.getItems());
