abstract class Department {
    // private id: string
    // private name: string;
    static fiscalYear = 2022;
    protected employees: string[] = [];

    constructor(protected readonly id: string, public name: string) {
        // this.id = id
        // this.name = name;
    }

    static createEmployee(name: string) {
        return { name: name };
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, "IT");
        this.admins = admins;
    }
    describe(this: Department): void {
        console.log("Hello from IT Department");
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No Report Found.");
    }

    set mostRecentReport(value: string) {
        if (!value) {
            throw new Error("Please pass in a valid value!");
        }
        this.addReport(value);
    }

    constructor(id: string, private reports: string[]) {
        super(id, "Accounts");
        this.lastReport = reports[0];
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }

    describe(this: Department): void {
        console.log("Hello from Accounting Department.");
    }
}

// const accounting = new Department("id1", "Accounting");
// accounting.addEmployee("Abhishek");
// accounting.addEmployee("Champ");
// console.log(accounting);
// accounting.describe();
// accounting.printEmployeeInformation();

const itAccounting = new ITDepartment("d2", ["Abhishek", "Champ"]);
console.log(itAccounting);

const accounts = new AccountingDepartment("d3", []);
accounts.addReport("Hello from report.");
console.log(accounts.mostRecentReport);
accounts.printReports();

const newEmployee = Department.createEmployee("Toxic");
console.log(newEmployee, Department.fiscalYear);

accounts.describe();
