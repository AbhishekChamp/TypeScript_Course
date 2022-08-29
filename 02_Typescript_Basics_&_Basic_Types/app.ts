// const person: {
//     name: string;
//     age: number;
// } = {
//     name: "Abhishek",
//     age: 25,
// };

const person = {
    name: "Abhishek",
    age: 25,
    hobbies: ["Sports", "Coding"],
};

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toLowerCase());
}
