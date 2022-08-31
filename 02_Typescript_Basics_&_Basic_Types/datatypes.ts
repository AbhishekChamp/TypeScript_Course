// const person: {
//     name: string;
//     age: number;
// } = {
//     name: "Abhishek",
//     age: 25,
// };

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; // Tuple
// } = {
//     name: "Abhishek",
//     age: 25,
//     hobbies: ["Sports", "Coding"],
//     role: [1, 'Creator']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const CREATOR = 2;

enum Role {
    ADMIN,
    READ_ONLY,
    CREATOR,
}

const person = {
    name: "Abhishek",
    age: 25,
    hobbies: ["Sports", "Coding"],
    role: Role.ADMIN,
};

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby.toLowerCase());
}

if (person.role === Role.ADMIN) {
    console.log("is Admin");
}
