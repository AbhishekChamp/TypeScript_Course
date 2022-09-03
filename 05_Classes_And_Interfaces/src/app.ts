class Department {
    // private id: string
    // private name: string;
    private employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        // this.id = id
        // this.name = name;
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const accounting = new Department("id1", "Accounting");

accounting.addEmployee("Abhishek");
accounting.addEmployee("Champ");

console.log(accounting);

accounting.describe();
accounting.printEmployeeInformation();
