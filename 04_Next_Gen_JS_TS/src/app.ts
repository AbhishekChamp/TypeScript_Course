const add = (a: number, b: number = 8) => a + b;

console.log(add(9));

const printOutput: (a: number | string) => void = (output) =>
    console.log(output);

const button = document.querySelector("button");

if (button) {
    button.addEventListener("click", (event) => console.log(event));
}

printOutput(add(27, 8));

const hobbies = ["Sports", "Coding"];
const activeHobbies = ["Content", ...hobbies];

console.log(activeHobbies);

const person = {
    fullName: "Abhishek",
    age: 25,
};

const copiedPerson = { ...person };

const addManyNumbers = (...numbers: number[]) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

const addedNumbers = addManyNumbers(8, 9, 27, 8.4);
console.log(addedNumbers);

const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

const [hobby, ...remaininghobbies] = activeHobbies;
console.log(hobby, remaininghobbies);

const { fullName: userName, age } = person;
console.log(userName, age);
